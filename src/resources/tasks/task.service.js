const tasksRepo = require('./task.memory.repository');

const getAllByBoard = () => tasksRepo.getAllByBoard();

const get = id => tasksRepo.get(id);

module.exports = { getAllByBoard, get };