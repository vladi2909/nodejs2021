import { IUser } from '../../models/user.model';
const usersRepo = require('./user.memory.repository');

/**
 * Gets all users.
 * @async
 * @return {Promise<User[]>} returns a new array of all users
 */
const getAll = (): Promise<IUser[]> => usersRepo.getAll();

/**
 * Finds a user by id.
 * @async
 * @param {string} id the user id
 * @return {Promise<User>} returns the user if there is such an id
 */
const get = (id: string): Promise<IUser> => usersRepo.get(id);

/**
 * Add a new user.
 * @async
 * @param {Object} new user
 * @return {Promise<User>} returns the user
 */
const create = (user: IUser): Promise<IUser> => usersRepo.create(user);

/**
 * remove user.
 * @async
 * @param {string} id user id
 * @return {Promise<User>} returns the deleted user
 */
const deleteById = (id: string): Promise<IUser> => usersRepo.deleteById(id);

/**
 * Update user
 * @async
 * @param {String} id user id
 * @param {Partial<User>} edited user
 * @return {Promise<User>} edited user
 */
const update = (id: string, modUser: IUser): Promise<IUser> => usersRepo.update(id, modUser);

export default { getAll, get, create, deleteById, update };
