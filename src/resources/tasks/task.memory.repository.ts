import {
  getAllTasksByBoard,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from '../../common/DB';
import { ITask } from '../../models/task.model';
/**
 * get all tasks.
 * @async
 * @return {Promise<Task[]>} returns a new array of all tasks
 */
const getAllByBoard = async (): Promise<ITask[]> => getAllTasksByBoard();

/**
 * task by id.
 * @async
 * @param {string} id the task
 * @return {Promise<Task>} returns the task
 */
const get = async (id: string): Promise<ITask> => {
  const task = await getTask(id);

  if (!task) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return task;
};

/**
 * Add a new task.
 * @async
 * @param {ITask} new task
 * @return {Promise<Task>} returns the task
 */
const create = async (task: ITask): Promise<ITask> => createTask(task);

/**
 * remove task.
 * @async
 * @param {string} id the task
 * @return {Promise<Task>} returns the deleted task
 */
const deleteById = async (id: string): Promise<ITask | boolean> => {
  const task = await deleteTask(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }
  
  return task;
};

/**
 * update task
 * @async
 * @param {string} id the task
 * @param {ITask} edited task
 * @return {Promise<Task>} edited task
 */
const update = async (id: string, modTask: ITask): Promise<ITask | boolean> => {
  const task = await updateTask(id, modTask);

  if (!task) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return task;
};

module.exports = { getAllByBoard, get, create, deleteById, update };
