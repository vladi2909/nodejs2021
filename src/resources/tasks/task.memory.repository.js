const DB = require('../../common/in-memory-db');

const getAllByBoard = async () => DB.getAllTasksByBoard();

module.exports = { getAllByBoard };