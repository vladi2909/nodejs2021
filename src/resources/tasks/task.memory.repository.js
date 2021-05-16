const DB = require('../../common/in-memory-db');

const getAllByBoard = async () => DB.getAllTasksByBoard();

const get = async id => {
  const task = DB.getTask(id);

  if (!task) {
    throw new Error(`The user with id: ${id} was not found`);
  }
  return task;
};

const create = async task => DB.createTask(task);

module.exports = { getAllByBoard, get, create };