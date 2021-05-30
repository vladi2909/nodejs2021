import { Board } from "../../interfaces/board.model";

const boardsRepo = require('./board.memory.repository');
/**
 * Gets all boards
 * @returns {Promise<Array>} returns coppied array of all boards
 */
const getAll = (): Promise<Array<Board>> => boardsRepo.getAll();
/**
 * Finds a board by id, if there is no board with that id, an error is returned
 * @param {string} id the board id of which to find
 * @returns {Promise<Object>} returns the board if there is such an id
 */
const get = (id: string): Promise<Board> => boardsRepo.get(id);
/**
 * Create a new board in the Database
 * @param {Object} board new board to create
 * @returns {Promise<Object>} returns the created board
 */
const create = (board: Board): Promise<Board> => boardsRepo.create(board);
/**
 * Delete board by id from Database
 * @param {string} id the id of board to be deleted
 * @returns {Promise<Object>} returns the deleted board
 */
const delById = (id: string): Promise<Board> => boardsRepo.delById(id);
/**
 * Update board in the Database, if there is no board with that id, an error is returned
 * @param {string} id the board id of which to find and update
 * @param {Object} modBoard the board to be changed
 * @returns {Promise<Object>} updated board
 */
const update = (id: string, modBoard: Board): Promise<Board> => boardsRepo.update(id, modBoard);

module.exports = { getAll, get, create, delById, update };