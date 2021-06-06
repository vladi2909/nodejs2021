"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const { v4: uuidv4 } = require('uuid');
/** Class representing a Board. */
class Board {
    /**
     * Create a board.
     * @param {Object.<string, string, Array.<Object.<string, string, number>>>} object board with key values id, title, columns. Columns it is an array of column objects. With its key values id, title, order.
     */
    constructor({ id = uuidv4(), title = 'TEST (Board title)', columns = [
        {
            id: uuidv4(),
            title: 'TEST (Column title)',
            order: 0,
        },
    ], } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
    /**
     *
     * @param {Object}  object board with key values id, title, columns. Columns it is an array of column objects. With its key values id, title, order.
     * @returns {Object} returns a Board object
     */
    static toResponse(board) {
        const { id, title, columns } = board;
        return { id, title, columns };
    }
}
exports.Board = Board;
