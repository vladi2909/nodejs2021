import { IBoard } from '../../models/board.model';
const boardsRepo = require('./board.memory.repository');

/**
 * Gets all boards
 * @async
 * @return {Promise<Board[]>} returns a new array of all boards
 */
const getAll = (): Promise<IBoard[]> => boardsRepo.getAll();

/**
 * Finds a board by id.
 * @async
 * @param {string} id the board id
 * @return {Promise<Board>} returns the board if there is such an id
 */
const get = (id: string): Promise<IBoard> => boardsRepo.get(id);

/**
 * Add a new board.
 * @async
 * @param {Object} new board
 * @return {Promise<Board>} returns the board
 */
const create = (board: IBoard): Promise<IBoard> => boardsRepo.create(board);

/**
 * remove board.
 * @async
 * @param {string} id board id
 * @return {Promise<Board>} returns the deleted board
 */
const deleteById = (id: string): Promise<IBoard> => boardsRepo.deleteById(id);

/**
 * update a board.
 * @async
 * @param {string} id board id
 * @param {Board} edited board
 * @return {Promise<Board>} edited board
 */
const update = (id: string, modBoard: IBoard): Promise<IBoard> => boardsRepo.update(id, modBoard);

module.exports = { getAll, get, create, deleteById, update };
