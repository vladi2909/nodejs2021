import { User } from "../../interfaces/user.model";

const usersRepo = require('./user.memory.repository');
/**
 * Gets all users
 * @returns {Promise<Array>} returns coppied array of all users
 */
const getAll = (): Promise<Array<User>> => usersRepo.getAll();
/**
 * Finds a user by id, if there is no user with that id, an error is returned
 * @param {string} id the user id of which to find
 * @returns {Promise<Object>} returns the user if there is such an id
 */
const get = (id: string): Promise<User> => usersRepo.get(id);
/**
 * Create a new user in the Database
 * @param {Object} user new user to create
 * @returns {Promise<Object>} returns the created user
 */
const create = (user: User): Promise<User> => usersRepo.create(user);
/**
 * Delete user by id from Database
 * @param {string} id the id of user to be deleted
 * @returns {Promise<Object>} returns the deleted user
 */
const delById = (id: string): Promise<User> => usersRepo.delById(id);
/**
 * Update user in the Database, if there is no user with that id, an error is returned
 * @param {string} id the user id of which to find and update
 * @param {Object} modUser the user to be changed
 * @returns {Promise<Object>} updated user
 */
const update = (id: string, modUser: User): Promise<User> => usersRepo.update(id, modUser);

module.exports = { getAll, get, create, delById, update };