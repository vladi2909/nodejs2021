const tasksRepo = require('./task.memory.repository');

const getAllByBoard = () => tasksRepo.getAllByBoard();

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

module.exports = { getAllByBoard, get, create };