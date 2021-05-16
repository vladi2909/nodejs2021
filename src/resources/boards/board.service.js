const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const delById = id => boardsRepo.delById(id);

module.exports = { getAll, get, create, delById };