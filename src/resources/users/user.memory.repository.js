const DB = require('../../common/in-memory-db');

const getAll = async () =>
// TODO: mock implementation. should be replaced during task development
  DB;

const get = id => DB.filter((item) => item.id === id)[0];

const create = async user => {
  DB.push(user);
  return get(user.id);
};

module.exports = { getAll, get, create };