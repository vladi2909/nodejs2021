import { IBoard } from '../../models/board.model';
const boardsRepo = require('./board.memory.repository');

/**
 * Shows all boards
 *
 * @async
 * @function getAll
 * @return {Promise<array>} returns a new array containing copies of all boards.
 */
const getAll = (): Promise<Array<IBoard>> => boardsRepo.getAll();

/**
 * Finds a board in the database by ID. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the board you want to find
 * @return {Promise<Object>} returns the board with the specified id
 */
const get = (id: string): Promise<IBoard> => boardsRepo.get(id);

/**
 * Adds a new board to the database.
 *
 * @async
 * @function create
 * @param {Object} new board
 * @return {Promise<Object>} returns the board who was created
 */
const create = (board: IBoard): Promise<IBoard> =>
  boardsRepo.create(board);

/**
 * A board by ID and removes it from the database.And removes all tasks that were on this board. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function deleteById
 * @param {String} id the board you want to find
 * @return {Promise<Object>} returns the deleted board
 */
const deleteById = (id: string): Promise<IBoard> =>
  boardsRepo.deleteById(id);

/**
 * Finds a board in the database and edits it. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the board you want to find
 * @param {Object} edited board
 * @return {Promise<Object>} edited board
 */
const update = (
  id: string,
  modifiedBoard: IBoard
): Promise<IBoard> => boardsRepo.update(id, modifiedBoard);

module.exports = { getAll, get, create, deleteById, update };
