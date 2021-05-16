const DB = require('../../common/in-memory-db');

const getAll = async () => DB.getAllBoards();

const get = async (id) => {
  const board = await DB.getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

const create = async (board) => DB.createBoard(board);

const delById = async (id) => {
  const board = await DB.deleteBoard(id);
  DB.delTasksByBoard(id);
  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

const update = async (id, modBoard) => {
  const board = await DB.updateBoard(id, modBoard);
  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }
  
  return board;
};

module.exports = { getAll, get, create, delById, update };
