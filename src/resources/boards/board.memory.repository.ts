import {
  getAllBoards,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
  deleteTasksByBoard,
} from '../../common/DB';
import { IBoard } from '../../models/board.model';
import { Board } from '../../entities/board.model';
/**
 * gets all boards
 * @async
 * @return {Promise<Board[]>} returns a new array of all boards
 */
const getAll = async (): Promise<Board[]> => getAllBoards();

/**
 * board by id
 * @async
 * @param {string} id the board
 * @return {Promise<Board>} returns the board
 */
const get = async (id: string): Promise<Board> => {
  const board = await getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

/**
 * Add a new board.
 * @async
 * @param {IBoard} new board
 * @return {Promise<Board>} returns the board
 */
const create = async (board: IBoard): Promise<Board> => createBoard(board);

/**
 * remove board.
 * @async
 * @param {string} id the board you want to find
 * @return {Promise<Board>} returns the deleted board
 */
const deleteById = async (id: string): Promise<Board | boolean> => {
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
 * @param {string} id the board you want to find
 * @param {IBoard} edited board
 * @return {Promise<Board>} edited board
 */
const update = async (id: string, modBoard: IBoard): Promise<Board | boolean> => {
  const board = await updateBoard(id, modBoard);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

module.exports = { getAll, get, create, deleteById, update };