const DB = require('../../common/in-memory-db');
/**
 * Gets all boards
 * @async
 * @returns {Promise<Array>} returns coppied array of all boards
 */
const getAllByBoard = async () => DB.getAllTasksByBoard();
/**
 * Finds a task by id, if there is no task with that id, an error is returned
 * @async
 * @param {string} id the task id of which to find
 * @returns {Promise<Object>} returns the task if there is such an id
 */
const get = async (id) => {
    const task = DB.getTask(id);
    if (!task) {
        throw new Error(`User by id: ${id} wasn't found`);
    }
    return task;
};
/**
 * Create a new task in the Database
 * @async
 * @param {Object} task new task to create
 * @returns {Promise<Object>} returns the created task
 */
const create = async (task) => DB.createTask(task);
/**
 * Delete task by id from Database
 * @async
 * @param {string} id the id of task to be deleted
 * @returns {Promise<Object>} returns the deleted task
 */
const delById = async (id) => {
    const task = await DB.delTask(id);
    if (!task) {
        throw new Error(`Task by id: ${id} hasn't been found`);
    }
    return task;
};
/**
 * Update task in the Database, if there is no task with that id, an error is returned
 * @async
 * @param {string} id the task id of which to find and update
 * @param {Object} modTask the task to be changed
 * @returns {Promise<Object>} updated task
 */
const update = async (id, modTask) => {
    const task = await DB.updateTask(id, modTask);
    if (!task) {
        throw new Error(`User by id: ${id} hasn't been found`);
    }
    return task;
};
module.exports = { getAllByBoard, get, create, delById, update };