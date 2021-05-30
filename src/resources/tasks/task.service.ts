import { Task } from "../../interfaces/task.model";

const tasksRepo = require('./task.memory.repository');
/**
 * Gets all tasks
 * @returns {Promise<Array>} returns coppied array of all tasks
 */
const getAllByBoard = (): Promise<Array<Task>> => tasksRepo.getAllByBoard();
/**
 * Finds a task by id, if there is no task with that id, an error is returned
 * @param {string} id the task id of which to find
 * @returns {Promise<Object>} returns the task if there is such an id
 */
const get = (id: string): Promise<Task> => tasksRepo.get(id);
/**
 * Create a new task in the Database
 * @param {Object} task new task to create
 * @returns {Promise<Object>} returns the created task
 */
const create = (task: Task): Promise<Task> => tasksRepo.create(task);
/**
 * Delete task by id from Database
 * @param {string} id the id of task to be deleted 
 * @returns {Promise<Object>} returns the deleted task
 */
const delById = (id: string): Promise<Task> => tasksRepo.delById(id);
/**
 * Update task in the Database, if there is no task with that id, an error is returned
 * @param {string} id the task id of which to find and update
 * @param {Object} modTask the task to be changed
 * @returns {Promise<Object>} updated task
 */
const update = (id: string, modTask: Task): Promise<Task> => tasksRepo.update(id, modTask);

module.exports = { getAllByBoard, get, create, delById, update };