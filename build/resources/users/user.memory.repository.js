"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../common/DB");
/**
 * Shows all users
 *
 * @async
 * @function getAll
 * @return {Promise<array>} returns a new array containing copies of all users.
 */
const getAll = async () => DB_1.getAllUsers();
/**
 * Finds a user in the database by ID. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the user you want to find
 * @return {Promise<Object>} returns the user with the specified id
 */
const get = async (id) => {
    const user = await DB_1.getUser(id);
    if (!user) {
        throw new Error(`The user with id: ${id} was not found`);
    }
    return user;
};
/**
 * Adds a new user to the database.
 *
 * @async
 * @function create
 * @param {Object} new user
 * @return {Promise<Object>} returns the user who was created
 */
const create = async (user) => DB_1.createUser(user);
/**
 * A user by ID and removes it from the database. And finds all tasks associated with this user and changes the userId to null. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function deleteById
 * @param {String} id the user you want to find
 * @return {Promise<Object>} returns the deleted user
 */
const deleteById = async (id) => {
    const user = await DB_1.deleteUser(id);
    DB_1.deleteTasksUserId(id);
    if (!user) {
        throw new Error(`The user with id: ${id} has not been found`);
    }
    return user;
};
/**
 * Finds a user in the database and edits it. If there is no user with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the user you want to find
 * @param {Object} edited user
 * @return {Promise<Object>} edited user
 */
const update = async (id, modifiedUser) => {
    const user = await DB_1.updateUser(id, modifiedUser);
    if (!user) {
        throw new Error(`The user with id: ${id} has not been found`);
    }
    return user;
};
module.exports = { getAll, get, create, deleteById, update };
