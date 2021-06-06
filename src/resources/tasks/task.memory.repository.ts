import {
  getAllTasksByBoard,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from '../../common/DB';
import { ITask } from '../../models/task.model';
/**
 * Shows all tasks
 *
 * @async
 * @function getAllByBoard
 * @return {Promise<array>} returns a new array containing copies of all tasks.
 */
const getAllByBoard = async (): Promise<Array<object>> => getAllTasksByBoard();

/**
 * Finds a task in the database by ID. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the task you want to find
 * @return {Promise<Object>} returns the task with the specified id
 */
const get = async (id: string): Promise<object> => {
  const task = await getTask(id);

  if (!task) {
    throw new Error(`The user with id: ${id} was not found`);
  }
  return task;
};

/**
 * Adds a new task to the database.
 *
 * @async
 * @function create
 * @param {Object} new task
 * @return {Promise<Object>} returns the task who was created
 */
const create = async (task: ITask): Promise<object> => createTask(task);

/**
 * A task by ID and removes it from the database. If there is no task with this ID, it returns an error.
 *
 * @async
 * @function deleteById
 * @param {String} id the task you want to find
 * @return {Promise<Object>} returns the deleted task
 */
const deleteById = async (id: string): Promise<object | boolean> => {
  const task = await deleteTask(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }
  return task;
};

/**
 * Finds a task in the database and edits it. If there is no task with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the task you want to find
 * @param {Object} edited task
 * @return {Promise<Object>} edited task
 */
const update = async (
  id: string,
  modifiedTask: ITask
): Promise<object | boolean> => {
  const task = await updateTask(id, modifiedTask);

  if (!task) {
    throw new Error(`The user with id: ${id} has not been found`);
  }
  return task;
};

module.exports = { getAllByBoard, get, create, deleteById, update };
