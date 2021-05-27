const tasksRepo = require('./task.memory.repository');

const getAllByBoard = () => tasksRepo.getAllByBoard();

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

const delById = id => tasksRepo.delById(id);

const update = (id, modTask) => tasksRepo.update(id, modTask);

module.exports = { getAllByBoard, get, create, delById, update };