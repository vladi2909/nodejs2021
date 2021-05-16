const tasksRepo = require('./task.memory.repository');

const getAllByBoard = () => tasksRepo.getAllByBoard();

module.exports = { getAllByBoard };