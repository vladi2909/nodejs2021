const DB = require('../../common/in-memory-db');
/**
 * Gets all users
 * @async
 * @returns {Promise<Array>} returns coppied array of all users
 */
const getAll = async () => DB.getAllUsers();
/**
 * Finds a user by id, if there is no user with that id, an error is returned
 * @async
 * @param {string} id the user id of which to find
 * @returns {Promise<Object>} returns the user if there is such an id
 */
const get = async id => {
  const user = DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};
/**
 * Create a new user in the Database
 * @async
 * @param {Object} user new user to create 
 * @returns {Promise<Object>} returns the created user
 */
const create = async user => DB.createUser(user);
/**
 * Delete user by id from Database
 * @async
 * @param {string} id the id of user to be deleted
 * @returns {Promise<Object>} returns the deleted user
 */
const delById = async id => {
  const user = await DB.delUser(id);
  DB.delTasksUserId(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
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
const update = async (id, modUser) => {
  const user = await DB.updateUser(id, modUser);
  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

module.exports = { getAll, get, create, delById, update };