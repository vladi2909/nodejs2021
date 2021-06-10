import {
  getAllBoards,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
  deleteTasksByBoard,
} from '../../common/DB';
import { IBoard } from '../../models/board.model';
/**
 * gets all boards
 * @async
 * @return {Promise<array>} returns a new array of all boards
 */
const getAll = async (): Promise<Array<object>> => getAllBoards();

/**
 * board by id
 * @async
 * @param {String} id the board
 * @return {Promise<Object>} returns the board
 */
const get = async (id: string): Promise<object> => {
  const board = await getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

/**
 * Add a new board.
 * @async
 * @param {Object} new board
 * @return {Promise<Object>} returns the board
 */
const create = async (board: IBoard): Promise<object> =>
  createBoard(board);

/**
 * remove board.
 * @async
 * @param {String} id the board you want to find
 * @return {Promise<Object>} returns the deleted board
 */
const deleteById = async (id: string): Promise<object | boolean> => {
  const board = await deleteBoard(id);

  deleteTasksByBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }
  return board;
};

/**
 * update board
 * @async
 * @param {String} id the board you want to find
 * @param {Object} edited board
 * @return {Promise<Object>} edited board
 */
const update = async (id: string, modifiedBoard: IBoard): Promise<object | boolean> => {
  const board = await updateBoard(id, modifiedBoard);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }
  
  return board;
};

module.exports = { getAll, get, create, deleteById, update };
