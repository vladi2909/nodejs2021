const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const delById = id => boardsRepo.delById(id);

const update = (id, modBoard) => boardsRepo.update(id, modBoard);

module.exports = { getAll, get, create, delById, update };