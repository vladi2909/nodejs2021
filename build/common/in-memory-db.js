"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delTasksByBoard = exports.delTasksUserId = exports.delTask = exports.updateTask = exports.createTask = exports.getTask = exports.getAllTasksByBoard = exports.updateBoard = exports.delBoard = exports.createBoard = exports.getBoard = exports.getAllBoards = exports.updateUser = exports.delUser = exports.createUser = exports.getUser = exports.getAllUsers = exports.Database = void 0;
exports.Database = {
    users: [],
    boards: [],
    tasks: [],
};
/**
 * Gets all users from Database
 * @returns {Promise<Array>} returns a copied array of all users
 */
const getAllUsers = async () => exports.Database.users.slice(0);
exports.getAllUsers = getAllUsers;
/**
 * Gets user by id from Database
 * @param {string} id the user id of which to find
 * @returns {Promise<Object>} returns the user if there is such an id
 */
const getUser = async (id) => exports.Database.users.filter(item => item.id === id)[0];
exports.getUser = getUser;
/**
 * Create a new user in the Database
 * @param {Object} user new user to create
 * @returns {Promise<Object>} returns the created user
 */
const createUser = async (user) => {
    exports.Database.users.push(user);
    return user;
};
exports.createUser = createUser;
/**
 * Delete user by id from Database
 * @param {string} id the id of user to be deleted
 * @returns {Promise<Object>} returns the deleted user
 */
const delUser = async (id) => {
    const deletion = exports.Database.users.filter(item => item.id === id)[0];
    if (!deletion) {
        return false;
    }
    exports.Database.users = exports.Database.users.filter(user => user.id !== deletion.id);
    return deletion;
};
exports.delUser = delUser;
/**
 * Update user in the Database
 * @param {string} id the user id of which to find and update
 * @param {Object} modUser the user to be changed
 * @returns {Promise<Object>} updated user
 */
const updateUser = async (id, modUser) => {
    const user = exports.Database.users.filter(item => item.id === id)[0];
    if (!user) {
        return false;
    }
    exports.Database.users = exports.Database.users.map(item => {
        if (item.id === id) {
            return modUser;
        }
        return item;
    });
    return modUser;
};
exports.updateUser = updateUser;
/**
 * Gets all boards from Database
 * @returns {Promise<Array>} returns a copied array of all boards
 */
const getAllBoards = async () => exports.Database.boards.slice(0);
exports.getAllBoards = getAllBoards;
/**
 * Gets boards by id from Database
 * @param {string} id the board id of which to find
 * @returns {Promise<Object>} returns the board if there is such an id
 */
const getBoard = async (id) => exports.Database.boards.filter(item => item.id === id)[0];
exports.getBoard = getBoard;
/**
 * Create a new board in the Database
 * @param {Object} board new board to create
 * @returns {Promise<Object>} returns the created board
 */
const createBoard = async (board) => {
    exports.Database.boards.push(board);
    return board;
};
exports.createBoard = createBoard;
/**
 * Delete board by id from Database
 * @param {string} id the id of board to be deleted
 * @returns {Promise<Object>} returns the deleted board
 */
const delBoard = async (id) => {
    const deletion = exports.Database.boards.filter(item => item.id === id)[0];
    if (!deletion) {
        return false;
    }
    exports.Database.boards = exports.Database.boards.filter(board => board.id !== deletion.id);
    return deletion;
};
exports.delBoard = delBoard;
/**
 * Update board in the Database
 * @param {string} id the board id of which to find and update
 * @param {Object} modBoard the board to be changed
 * @returns updated board
 * @returns {Promise<Object>} updated board
 */
const updateBoard = async (id, modBoard) => {
    const board = exports.Database.boards.filter(item => item.id === id)[0];
    if (!board) {
        return false;
    }
    exports.Database.boards = exports.Database.boards.map(item => {
        if (item.id === id) {
            return modBoard;
        }
        return item;
    });
    return modBoard;
};
exports.updateBoard = updateBoard;
/**
 * Gets all tasks by boards
 * @returns {Promise<Array>} returns coppied array of all tasks
 */
const getAllTasksByBoard = async () => exports.Database.tasks.slice(0);
exports.getAllTasksByBoard = getAllTasksByBoard;
/**
 * Gets tasks by id from Database
 * @param {string} id the task id of which to find
 * @returns {Promise<Object>} returns the task if there is such an id
 */
const getTask = async (id) => exports.Database.tasks.filter(item => item.id === id)[0];
exports.getTask = getTask;
/**
 * Create a new task in the Database
 * @param {Object} task new task to create
 * @returns {Promise<Object>} returns the created task
 */
const createTask = async (task) => {
    exports.Database.tasks.push(task);
    return task;
};
exports.createTask = createTask;
/**
 * Update task in the Database
 * @param {string} id the task id of which to find and update
 * @param {Object} modTask the task to be changed
 * @returns updated task
 * @returns {Promise<Object>} updated task
 */
const updateTask = async (id, modTask) => {
    const task = exports.Database.tasks.filter(item => item.id === id)[0];
    if (!task) {
        return false;
    }
    exports.Database.tasks = exports.Database.tasks.map(item => {
        if (item.id === id) {
            return modTask;
        }
        return item;
    });
    return modTask;
};
exports.updateTask = updateTask;
/**
 * Delete task by id from Database
 * @param {string} id the id of task to be deleted
 * @returns {Promise<Object>} returns the deleted task
 */
const delTask = async (id) => {
    const deletion = exports.Database.tasks.filter(item => item.id === id)[0];
    if (!deletion) {
        return false;
    }
    exports.Database.tasks = exports.Database.tasks.filter(task => task.id !== deletion.id);
    return deletion;
};
exports.delTask = delTask;
/**
 * When a user is deleted, it finds all tasks associated with that user and changes the userId to null
 * @param {string} userId id of the user to be deleted
 * @returns {Promise<Array>} returns tasks with modified user id
 */
const delTasksUserId = async (userId) => {
    exports.Database.tasks = exports.Database.tasks.map(item => item.userId === userId ? { ...item, userId: null } : { ...item });
    return exports.Database.tasks;
};
exports.delTasksUserId = delTasksUserId;
/**
 * Removing a board removes all tasks that were on that board
 * @param {string} boardId the id of board to be deleted
 * @returns {Promise<Array>} new array after deletion
 */
const delTasksByBoard = async (boardId) => {
    exports.Database.tasks = exports.Database.tasks.filter(item => item.boardId !== boardId);
    return exports.Database.tasks;
};
exports.delTasksByBoard = delTasksByBoard;
