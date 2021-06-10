import {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  deleteTasksUserId,
  updateUser,
} from '../../common/DB';
import { IUser } from '../../models/user.model';
/**
 * get all users.
 * @async
 * @return {Promise<User[]>} returns a new array of all users
 */
const getAll = async (): Promise<IUser[]> => getAllUsers();

/**
 * get user by id.
 * @async
 * @param {string} id the user
 * @return {Promise<User>} returns the user id
 */
const get = async (id: string): Promise<IUser> => {
  const user = await getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

/**
 * Add a new user.
 * @async
 * @param {IUser} new user
 * @return {Promise<User>} returns the user
 */
const create = async (user: IUser): Promise<IUser> => createUser(user);

/**
 * remove user by id.
 * @async
 * @param {string} id the user id
 * @return {Promise<User>} returns the deleted user
 */
const deleteById = async (id: string): Promise<IUser | boolean> => {
  const user = await deleteUser(id);

  deleteTasksUserId(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

/**
 * update user.
 * @async
 * @param {string} id the user id
 * @param {IUser} edited user
 * @return {Promise<User>} edited user
 */
const update = async (id: string, modUser: IUser): Promise<IUser | boolean> => {
  const user = await updateUser(id, modUser);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

module.exports = { getAll, get, create, deleteById, update };
