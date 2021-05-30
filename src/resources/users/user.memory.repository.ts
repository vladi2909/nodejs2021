const DB = require('../../common/in-memory-db');
import { User } from "../../interfaces/user.model";
/**
 * Gets all users
 * @async
 * @returns {Promise<Array>} returns coppied array of all users
 */
const getAll = async (): Promise<Array<object>> => DB.getAllUsers();
/**
 * Finds a user by id, if there is no user with that id, an error is returned
 * @async
 * @param {string} id the user id of which to find
 * @returns {Promise<Object>} returns the user if there is such an id
 */
const get = async (id: string): Promise<object> => {
  const user = DB.getUser(id);

  if (!user) {
    throw new Error(`User by id: ${id} wasn't found`);
  }

  return user;
};
/**
 * Create a new user in the Database
 * @async
 * @param {Object} user new user to create 
 * @returns {Promise<Object>} returns the created user
 */
const create = async (user: User): Promise<object> => DB.createUser(user);
/**
 * Delete user by id from Database
 * @async
 * @param {string} id the id of user to be deleted
 * @returns {Promise<Object>} returns the deleted user
 */
const delById = async (id: string): Promise<object | boolean> => {
  const user = await DB.delUser(id);
  DB.delTasksUserId(id);

  if (!user) {
    throw new Error(`User by id: ${id} hasn't been found`);
  }

  return user;
};
/**
 * Update user in the Database, if there is no user with that id, an error is returned
 * @async
 * @param {string} id the user id of which to find and update
 * @param {Object} modUser the user to be changed
 * @returns {Promise<Object>} updated user
 */
const update = async (id: string, modUser: User): Promise<object | boolean> => {
  const user = await DB.updateUser(id, modUser);
  if (!user) {
    throw new Error(`User by id: ${id} hasn't been found`);
  }

  return user;
};

module.exports = { getAll, get, create, delById, update };