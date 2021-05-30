import { Board } from "../interfaces/board.model";
import { DB } from "../interfaces/DB.model";
import { Task } from "../interfaces/task.model";
import { User } from "../interfaces/user.model";

export const Database: DB = {
  users: [],
  boards: [],
  tasks: [],
};

/**
 * Gets all users from Database
 * @returns {Array} returns a copied array of all users
 */
export const getAllUsers = async (): Promise<Array<object>> => Database.users.slice(0);
/**
 * Gets user by id from Database
 * @param {string} id the user id of which to find
 * @returns {Object} returns the user if there is such an id
 */
export const getUser = async (id: string): Promise<object | undefined> => Database.users.filter(item => item.id === id)[0];
/**
 * Create a new user in the Database
 * @param {Object} user new user to create
 * @returns {Object} returns the created user
 */
export const createUser = async (user: User): Promise<object> => {
  Database.users.push(user);
  return user;
};
/**
 * Delete user by id from Database
 * @param {string} id the id of user to be deleted
 * @returns {Object} returns the deleted user
 */
export const delUser = async (id: string): Promise<object | boolean> => {
  const deletion = Database.users.filter(item => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.users = Database.users.filter(user => user.id !== deletion.id);
  return deletion;
};
/**
 * Update user in the Database
 * @param {string} id the user id of which to find and update
 * @param {Object} modUser the user to be changed
 * @returns {Object} updated user
 */
export const updateUser = async (id: string, modUser: User): Promise<object | boolean> => {
  const user = Database.users.filter(item => item.id === id)[0];
  if (!user) {
    return false;
  }

  Database.users = Database.users.map(item => {
    if (item.id === id) {
      return modUser;
    }

    return item;
  });

  return modUser;
};
/**
 * Gets all boards from Database
 * @returns {Array} returns a copied array of all boards
 */
export const getAllBoards = async (): Promise<Array<object>> => Database.boards.slice(0);
/**
 * Gets boards by id from Database
 * @param {string} id the board id of which to find
 * @returns {Object} returns the board if there is such an id
 */
export const getBoard = async (id: string): Promise<object | undefined> => Database.boards.filter(item => item.id === id)[0];
/**
 * Create a new board in the Database
 * @param {Object} board new board to create
 * @returns {Object} returns the created board
 */
export const createBoard = async (board: Board): Promise<object> => {
  Database.boards.push(board);
  return board;
};
/**
 * Delete board by id from Database
 * @param {string} id the id of board to be deleted
 * @returns {Object} returns the deleted board
 */
export const delBoard = async (id: string): Promise<object | boolean> => {
  const deletion = Database.boards.filter(item => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.boards = Database.boards.filter(board => board.id !== deletion.id);
  return deletion;
};
/**
 * Update board in the Database
 * @param {string} id the board id of which to find and update
 * @param {Object} modBoard the board to be changed
 * @returns updated board
 * @returns {Object} updated board
 */
export const updateBoard = async (id: string, modBoard: Board): Promise<object | boolean> => {
  const board = Database.boards.filter(item => item.id === id)[0];
  if (!board) {
    return false;
  }

  Database.boards = Database.boards.map(item => {
    if (item.id === id) {
      return modBoard;
    }

    return item;
  });

  return modBoard;
};

/**
 * Gets all tasks by boards
 * @returns {Array} returns coppied array of all tasks
 */
export const getAllTasksByBoard = async (): Promise<Array<object>> => Database.tasks.slice(0);
/**
 * Gets tasks by id from Database
 * @param {string} id the task id of which to find
 * @returns {Object} returns the task if there is such an id
 */
export const getTask = async (id: string): Promise<object | undefined> => Database.tasks.filter(item => item.id === id)[0];
/**
 * Create a new task in the Database
 * @param {Object} task new task to create
 * @returns {Object} returns the created task
 */
export const createTask = async (task: Task): Promise<object> => {
  Database.tasks.push(task);
  return task;
};
/**
 * Update task in the Database
 * @param {string} id the task id of which to find and update
 * @param {Object} modTask the task to be changed
 * @returns updated task
 * @returns {Object} updated task
 */
export const updateTask = async (id: string, modTask: Task): Promise<object | boolean> => {
  const task = Database.tasks.filter(item => item.id === id)[0];
  if (!task) {
    return false;
  }

  Database.tasks = Database.tasks.map(item => {
    if (item.id === id) {
      return modTask;
    }

    return item;
  });

  return modTask;
};
/**
 * Delete task by id from Database
 * @param {string} id the id of task to be deleted
 * @returns {Object} returns the deleted task
 */
export const delTask = async (id: string): Promise<object | boolean> => {
  const deletion = Database.tasks.filter(item => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.tasks = Database.tasks.filter(task => task.id !== deletion.id);
  return deletion;
};
/**
 * When a user is deleted, it finds all tasks associated with that user and changes the userId to null
 * @param {string} userId id of the user to be deleted
 * @returns {Array} returns tasks with modified user id
 */
export const delTasksUserId = async (userId: string): Promise<Array<object>> => {
    Database.tasks = Database.tasks.map(item =>
    item.userId === userId ? { ...item, userId: null } : { ...item }
  );

  return Database.tasks;
};
/**
 * Removing a board removes all tasks that were on that board
 * @param {string} boardId the id of board to be deleted
 * @returns {Array} new array after deletion
 */
export const delTasksByBoard = async (boardId: string): Promise<Array<object>> => {
  Database.tasks = Database.tasks.filter(item => item.boardId !== boardId);
  return Database.tasks;
};