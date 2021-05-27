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

const delById = async id => {
    const task = await DB.delTask(id);
    if (!task) {
      throw new Error(`The task with id: ${id} has not been found`);
    }

    return task;
  };
  
  const update = async (id, modTask) => {
    const task = await DB.updateTask(id, modTask);
    if (!task) {
      throw new Error(`The user with id: ${id} has not been found`);
    }
    return task;
  };
  
  module.exports = { getAllByBoard, get, create, delById, update };