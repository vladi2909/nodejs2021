import { ITask } from '../../models/task.model';

const tasksRepo = require('./task.memory.repository');

/**
 * Shows all tasks
 *
 * @async
 * @function getAllByBoard
 * @return {Promise<array>} returns a new array containing copies of all tasks.
 */
const getAllByBoard = (): Promise<Array<ITask>> => tasksRepo.getAllByBoard();

/**
 * Finds a task in the database by ID. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the task you want to find
 * @return {Promise<Object>} returns the task with the specified id
 */
const get = (id: string): Promise<ITask> => tasksRepo.get(id);

/**
 * Adds a new task to the database.
 *
 * @async
 * @function create
 * @param {Object} new task
 * @return {Promise<Object>} returns the task who was created
 */
const create = (task: ITask): Promise<ITask> => tasksRepo.create(task);

/**
 * A task by ID and removes it from the database. If there is no task with this ID, it returns an error.
 *
 * @async
 * @function deleteById
 * @param {String} id the task you want to find
 * @return {Promise<Object>} returns the deleted task
 */
const deleteById = (id: string): Promise<ITask> => tasksRepo.deleteById(id);

/**
 * Finds a task in the database and edits it. If there is no task with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the task you want to find
 * @param {Object} edited task
 * @return {Promise<Object>} edited task
 */
const update = (id: string, modifiedTask: ITask): Promise<ITask> =>
  tasksRepo.update(id, modifiedTask);

module.exports = { getAllByBoard, get, create, deleteById, update };
