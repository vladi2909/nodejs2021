const DB = require('../../common/in-memory-db');
import { Board } from "../../interfaces/board.model";
/**
 * Gets all boards
 * @async
 * @returns {Promise<Array>} returns coppied array of all boards
 */
const getAll = async (): Promise<Array<object>> => DB.getAllBoards();
/**
 * Finds a board by id, if there is no board with that id, an error is returned
 * @async
 * @param {string} id the board id of which to find
 * @returns {Promise<Object>} returns the board if there is such an id
 */
const get = async (id: string): Promise<object> => {
  const board = await DB.getBoard(id);

  if (!board) {
    throw new Error(`Board by id: ${id} hasn't been found`);
  }

  return board;
};
/**
 * Create a new board in the Database
 * @async
 * @param {Object} board new board to create
 * @returns {Promise<Object>} returns the created board
 */
const create = async (board: Board): Promise<object> => DB.createBoard(board);
/**
 * Delete board by id from Database
 * @async
 * @param {string} id the id of board to be deleted
 * @returns {Promise<Object>} returns the deleted board
 */
const delById = async (id: string): Promise<object | boolean> => {
  const board = await DB.delBoard(id);
  DB.delTasksByBoard(id);
  if (!board) {
    throw new Error(`Board by id: ${id} hasn't been found`);
  }

  return board;
};
/**
 * Update board in the Database, if there is no board with that id, an error is returned
 * @async
 * @param {string} id the board id of which to find and update
 * @param {Object} modBoard the board to be changed
 * @returns {Promise<Object>} updated board
 */
const update = async (id: string, modBoard: Board): Promise<object | boolean> => {
  const board = await DB.updateBoard(id, modBoard);
  if (!board) {
    throw new Error(`Board by id: ${id} hasn't been found`);
  }
  
  return board;
};

module.exports = { getAll, get, create, delById, update };
