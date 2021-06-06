import { IUser } from '../../models/user.model';

const usersRepo = require('./user.memory.repository');

/**
 * Shows all users
 *
 * @async
 * @function getAll
 * @return {Promise<array>} returns a new array containing copies of all users.
 */
const getAll = (): Promise<Array<IUser>> => usersRepo.getAll();

/**
 * Finds a user in the database by ID. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the user you want to find
 * @return {Promise<Object>} returns the user with the specified id
 */
const get = (id: string): Promise<IUser> => usersRepo.get(id);

/**
 * Adds a new user to the database.
 *
 * @async
 * @function create
 * @param {Object} new user
 * @return {Promise<Object>} returns the user who was created
 */
const create = (user: IUser): Promise<IUser> => usersRepo.create(user);

/**
 * A user by ID and removes it from the database. And finds all tasks associated with this user and changes the userId to null. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function deleteById
 * @param {String} id the user you want to find
 * @return {Promise<Object>} returns the deleted user
 */
const deleteById = (id: string): Promise<IUser> => usersRepo.deleteById(id);

/**
 * Finds a user in the database and edits it. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the user you want to find
 * @param {Object} edited user
 * @return {Promise<Object>} edited user
 */
const update = (id: string, modifiedUser: IUser): Promise<IUser> =>
  usersRepo.update(id, modifiedUser);

module.exports = { getAll, get, create, deleteById, update };
