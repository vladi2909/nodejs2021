import { IUser } from '../models/user.model';
import { IBoard } from '../models/board.model';
import { ITask } from '../models/task.model';
import { IDB } from '../models/db.model';

export const DB: IDB = {
  users: [],
  boards: [],
  tasks: [],
};

/**
 * Gets all users from Database
 * @returns {Promise<Array>} returns a copied array of all users
 */
export const getAllUsers = async (): Promise<Array<object>> => DB.users.slice(0);

/**
 * Gets user by id from Database
 *
 * @param {String} id id the user id of which to find
 * @returns {Promise<Object>} returns the user if there is such an id
 */
export const getUser = async (id: string): Promise<object | undefined> => DB.users.filter(item => item.id === id)[0];

/**
 * Adds a new user to the database.
 * @param {Object} new user
 * @returns {Promise<Object>} returns the user who was created
 */
export const createUser = async (user: IUser): Promise<object> => {
  DB.users.push(user);
  return user;
};

/**
 * A user by ID and removes it from the database.
 * @param {String} id the user you want to find
 * @returns {Promise<Object>} returns the deleted user
 */
export const deleteUser = async (id: string): Promise<object | boolean> => {
  const forDeletion = DB.users.filter(item => item.id === id)[0];

  if (!forDeletion) {
    return false;
  }

  DB.users = DB.users.filter(user => user.id !== forDeletion.id);
  return forDeletion;
};

/**
 * Finds a user in the database and edits it.
 * @param {String} id the user you want to find
 * @param {Object} edited user
 * @returns {Promise<Object>}  edited user
 */
export const updateUser = async (
  id: string,
  modifiedUser: IUser
): Promise<object | boolean> => {
  const user = DB.users.filter(item => item.id === id)[0];

  if (!user) {
    return false;
  }

  DB.users = DB.users.map(item => {
    if (item.id === id) {
      return modifiedUser;
    }
    return item;
  });
  return modifiedUser;
};

/**
 * Shows all boards
 * @returns {Promise<Array>} returns a new array containing copies of all boards.
 */
export const getAllBoards = async (): Promise<Array<object>> =>
  DB.boards.slice(0);

/**
 * Finds a board in the database by ID.
 * @param {String} id the board you want to find
 * @returns {Promise<Object>} if there is such an ID in the database, it returns the board with this ID
 */
export const getBoard = async (id: string): Promise<object | undefined> => DB.boards.filter(item => item.id === id)[0];

/**
 * Adds a new board to the database.
 * @param {Object} new board
 * @returns {Promise<Object>} returns the board who was created
 */
export const createBoard = async (board: IBoard): Promise<object> => {
  DB.boards.push(board);
  return board;
};

/**
 * A board by ID and removes it from the database.
 * @param {String} id the board you want to find
 * @returns {Promise<Object>} returns the deleted board
 */
export const deleteBoard = async (id: string): Promise<object | boolean> => {
  const forDeletion = DB.boards.filter(item => item.id === id)[0];

  if (!forDeletion) {
    return false;
  }

  DB.boards = DB.boards.filter(board => board.id !== forDeletion.id);
  return forDeletion;
};

/**
 * Finds a board in the database and edits it.
 * @param {String} id the board you want to find
 * @param {Object} edited board
 * @returns {Promise<Object>} edited board
 */
export const updateBoard = async (id: string, modifiedBoard: IBoard): Promise<object | boolean> => {
  const board = DB.boards.filter(item => item.id === id)[0];

  if (!board) {
    return false;
  }

  DB.boards = DB.boards.map(item => {
    if (item.id === id) {
      return modifiedBoard;
    }
    return item;
  });
  return modifiedBoard;
};

/**
 * Shows all tasks
 * @returns {Promise<Array>} returns a new array containing copies of all tasks.
 */
export const getAllTasksByBoard = async (): Promise<Array<object>> => DB.tasks.slice(0);

/**
 * Finds a task in the database by ID.
 * @param {String} id the task you want to find
 * @returns {Promise<Object>}if there is such an ID in the database, it returns the task with this ID
 */
export const getTask = async (id: string): Promise<object | undefined> => DB.tasks.filter(item => item.id === id)[0];

/**
 * Adds a new task to the database.
 * @param {Object} new task
 * @returns {Promise<Object>} returns the task who was created
 */
export const createTask = async (task: ITask): Promise<object> => {
  DB.tasks.push(task);
  return task;
};

/**
 * Finds a task in the database and edits it.
 * @param {String} id the task you want to find
 * @param {Object} edited task
 * @returns {Promise<Object>} edited task
 */
export const updateTask = async (id: string, modifiedTask: ITask): Promise<object | boolean> => {
  const task = DB.tasks.filter(item => item.id === id)[0];

  if (!task) {
    return false;
  }

  DB.tasks = DB.tasks.map(item => {
    if (item.id === id) {
      return modifiedTask;
    }
    return item;
  });
  return modifiedTask;
};

/**
 * A task by ID and removes it from the database.
 * @param {String} id the task you want to find
 * @returns {Promise<Object>} returns the deleted task
 */
export const deleteTask = async (id: string): Promise<object | boolean> => {
  const forDeletion = DB.tasks.filter(item => item.id === id)[0];

  if (!forDeletion) {
    return false;
  }

  DB.tasks = DB.tasks.filter(task => task.id !== forDeletion.id);
  return forDeletion;
};

/**
 * When deleting a user, the function finds all tasks associated with this user and changes the userId to null.
 * @param {String} the user id that is being removed
 * @returns {Promise<Array>}  arroy tasks with modified userId
 */
export const deleteTasksUserId = async (userId: string): Promise<Array<object>> => {
  DB.tasks = DB.tasks.map(item =>
    item.userId === userId ? { ...item, userId: null } : { ...item }
  );
  return DB.tasks;
};

/**
 * When deleting a board, deletes all tasks that were in this board.
 * @param {String} id of the board that is being removed
 * @returns {Promise<Array>} new array instance
 */
export const deleteTasksByBoard = async (boardId: string): Promise<Array<object>> => {
  DB.tasks = DB.tasks.filter(item => item.boardId !== boardId);
  return DB.tasks;
};
