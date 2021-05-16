const DB = require('../../common/in-memory-db');

const getAll = async () =>   
// TODO: mock implementation. should be replaced during task development
  DB
;

const get = id => DB.filter((item) => item.id === id)[0];

module.exports = { getAll, get };