import { ITask } from '../../models/task.model';
const tasksRepo = require('./task.memory.repository');

/**
 * Gets all tasks.
 * @async
 * @return {Promise<Task[]>} returns a new array of all tasks
 */
const getAllByBoard = (): Promise<ITask[]> => tasksRepo.getAllByBoard();

/**
 * Find a task by id.
 * @async
 * @param {string} id the task id
 * @return {Promise<Task>} returns the task if there is such an id
 */
const get = (id: string): Promise<ITask> => tasksRepo.get(id);

/**
 * Add a new task.
 * @async
 * @param {Object} new task
 * @return {Promise<Task>} returns the task
 */
const create = (task: ITask): Promise<ITask> => tasksRepo.create(task);

/**
 * remove task.
 * @async
 * @param {string} id the task id
 * @return {Promise<Task>} returns the deleted task
 */
const deleteById = (id: string): Promise<ITask> => tasksRepo.deleteById(id);

/**
 * remove task.
 * @async
 * @param {string} id the task id
 * @param {Partial<Task>} edited task
 * @return {Promise<Task>} edited task
 */
const update = (id: string, modTask: ITask): Promise<ITask> =>
  tasksRepo.update(id, modTask);

module.exports = { getAllByBoard, get, create, deleteById, update };
