const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const delById = id => usersRepo.delById(id);

module.exports = { getAll, get, create, delById };