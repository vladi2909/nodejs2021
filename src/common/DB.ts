import { IUser } from '../models/user.model';
import { IBoard } from '../models/board.model';
import { ITask } from '../models/task.model';
import { IDB } from '../models/db.model';
import { Board } from '../resources/boards/board.model';

export const DB: IDB = {
  users: [],
  boards: [],
  tasks: []
};

/**
 * Gets all users.
 * @returns {Promise<User[]>} returns array of all users
 */
export const getAllUsers = async (): Promise<IUser[]> => DB.users.slice(0);

/**
 * Gets user by id.
 * @param {string} id the user id
 * @returns {Promise<User>} returns the user if there is such an id
 */
export const getUser = async (id: string): Promise<IUser | undefined> => DB.users.filter(item => item.id === id)[0];

/**
 * Add a new user.
 * @param {object} new user
 * @returns {Promise<User>} returns the user
 */
export const createUser = async (user: IUser): Promise<IUser> => {
  DB.users.push(user);
  return user;
};

/**
 * A user by id
 * @param {string} id the user id
 * @returns {Promise<User>} returns the deleted user
 */
export const deleteUser = async (id: string): Promise<IUser | null> => {
  const deletion = DB.users.filter(item => item.id === id)[0];

  if (!deletion) {
    return null;
  }

  DB.users = DB.users.filter(user => user.id !== deletion.id);
  return deletion;
};

/**
 * update user
 * @param {string} id user id
 * @param {Object} edited user
 * @returns {Promise<User>}  edited user
 */
export const updateUser = async (id: string, modUser: IUser): Promise<IUser | null> => {
  const user = DB.users.filter(item => item.id === id)[0];

  if (!user) {
    return null;
  }

  DB.users = DB.users.map(item => {
    if (item.id === id) {
      return modUser;
    }

    return item;
  });

  return modUser;
};

/**
 * Gets all boards.
 * @returns {Promise<Board[]>} returns a new array of all boards
 */
export const getAllBoards = async (): Promise<Board[]> => DB.boards.slice(0);

/**
 * get board by id.
 * @param {string} id the board id
 * @returns {Promise<Board>} if there is such an id, it returns the board with this id
 */
export const getBoard = async (id: string): Promise<IBoard | undefined> => DB.boards.filter(item => item.id === id)[0];

/**
 * Add a new board.
 * @param {object} new board
 * @returns {Promise<Board>} returns the board
 */
export const createBoard = async (board: IBoard): Promise<Board> => {
  DB.boards.push(board);
  return board;
};

/**
 * remove board
 * @param {string} id board id
 * @returns {Promise<Board>} returns the deleted board
 */
export const deleteBoard = async (id: string): Promise<Board | null> => {
  const deletion = DB.boards.filter(item => item.id === id)[0];

  if (!deletion) {
    return null;
  }

  DB.boards = DB.boards.filter(board => board.id !== deletion.id);
  return deletion;
};

/**
 * update board.
 * @param {string} id the board
 * @param {Board} edited board
 * @returns {Promise<Board>} edited board
 */
export const updateBoard = async (id: string, modBoard: IBoard): Promise<Board | null> => {
  const board = DB.boards.filter(item => item.id === id)[0];

  if (!board) {
    return null;
  }

  DB.boards = DB.boards.map(item => {
    if (item.id === id) {
      return modBoard;
    }
    return item;
  });
  return modBoard;
};

/**
 * Gets all tasks
 * @returns {Promise<Task[]>} returns a new array of all tasks
 */
export const getAllTasksByBoard = async (): Promise<ITask[]> => DB.tasks.slice(0);

/**
 * get a task by id.
 * @param {string} id the task
 * @returns {Promise<Taks>}if there is such an id, it returns the task with this id
 */
export const getTask = async (id: string): Promise<ITask | undefined> => DB.tasks.filter(item => item.id === id)[0];

/**
 * Add task.
 * @param {object} new task
 * @returns {Promise<Task>} returns the task
 */
export const createTask = async (task: ITask): Promise<ITask> => {
  DB.tasks.push(task);
  return task;
};

/**
 * update a task.
 * @param {string} id the task id
 * @param {object} edited task
 * @returns {Promise<Task>} edited task
 */
export const updateTask = async (id: string, modTask: ITask): Promise<ITask | null> => {
  const task = DB.tasks.filter(item => item.id === id)[0];

  if (!task) {
    return null;
  }

  DB.tasks = DB.tasks.map(item => {
    if (item.id === id) {
      return modTask;
    }

    return item;
  });

  return modTask;
};

/**
 * remove task
 * @param {string} id the task id
 * @returns {Promise<Task>} returns the deleted task
 */
export const deleteTask = async (id: string): Promise<ITask | null> => {
  const deletion = DB.tasks.filter(item => item.id === id)[0];

  if (!deletion) {
    return null;
  }

  DB.tasks = DB.tasks.filter(task => task.id !== deletion.id);
  return deletion;
};

/**
 * When deleting a user, the function finds all tasks associated with this user.
 * @param {string} the user id
 * @returns {Promise<Task[]>} array tasks
 */
export const deleteTasksUserId = async (userId: string): Promise<ITask[]> => {
  DB.tasks = DB.tasks.map(item => item.userId === userId ? { ...item, userId: null } : { ...item });
  return DB.tasks;
};

/**
 * When deleting a board, deletes all tasks that were in this board.
 * @param {string} id board id
 * @returns {Promise<Board[]>} array boards
 */
export const deleteTasksByBoard = async (boardId: string): Promise<ITask[]> => {
  DB.tasks = DB.tasks.filter(item => item.boardId !== boardId);
  return DB.tasks;
};