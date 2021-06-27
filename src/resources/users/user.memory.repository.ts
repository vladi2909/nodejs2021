import { deleteTasksUserId } from '../../common/DB';
import { IUser } from '../../models/user.model';
import { getRepository } from 'typeorm';
import { User } from '../../entities/user.model';

/**
 * get all users.
 * @async
 * @return {Promise<User[]>} returns a new array of all users
 */
const getAll = async (): Promise<User[]> => getRepository(User).find();

/**
 * get user by id.
 * @async
 * @param {string} id the user
 * @return {Promise<User>} returns the user id
 */
const get = async (id: string): Promise<User> => {
  const user = await getRepository(User).findOne(id);

  if (!user) {
    throw new Error(`The user with id: ${id} not found`);
  }

  return user;
};

/**
 * Add a new user.
 * @async
 * @param {IUser} new user
 * @return {Promise<User>} returns the user
 */
const create = async (data: IUser): Promise<User> => {
  const userRepository = getRepository(User);
  const user = userRepository.create(data);
  await userRepository.save(user);
  return get(user.id);
}

/**
 * remove user by id.
 * @async
 * @param {string} id the user id
 * @return {Promise<User>} returns the deleted user
 */
const deleteById = async (id: string): Promise<User | boolean> => {
  const user = await get(id);
  deleteTasksUserId(id);
  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  await getRepository(User).remove(user);
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
  const user = await get(id);
  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  await getRepository(User).update(user.id, modUser);
  return get(user.id);
};

module.exports = { getAll, get, create, deleteById, update };
