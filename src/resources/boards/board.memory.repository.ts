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
 * Shows all boards
 *
 * @async
 * @function getAll
 * @return {Promise<array>} returns a new array containing copies of all boards.
 */
const getAll = async (): Promise<Array<object>> => getAllBoards();

/**
 * Finds a board in the database by ID. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function get
 * @param {String} id the board you want to find
 * @return {Promise<Object>} returns the board with the specified id
 */
const get = async (id: string): Promise<object> => {
  const board = await getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

/**
 * Adds a new board to the database.
 *
 * @async
 * @function create
 * @param {Object} new board
 * @return {Promise<Object>} returns the board who was created
 */
const create = async (board: IBoard): Promise<object> =>
  createBoard(board);

/**
 * A board by ID and removes it from the database.And removes all tasks that were on this board. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function deleteById
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
 * Finds a board in the database and edits it. If there is no board with this ID, it returns an error.
 *
 * @async
 * @function update
 * @param {String} id the board you want to find
 * @param {Object} edited board
 * @return {Promise<Object>} edited board
 */
const update = async (
  id: string,
  modifiedBoard: IBoard
): Promise<object | boolean> => {
  const board = await updateBoard(id, modifiedBoard);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }
  return board;
};

module.exports = { getAll, get, create, deleteById, update };
