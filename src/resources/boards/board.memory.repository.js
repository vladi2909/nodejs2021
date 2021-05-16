const DB = require('../../common/in-memory-db');

const getAll = async () => DB.getAllBoards();

module.exports = { getAll };