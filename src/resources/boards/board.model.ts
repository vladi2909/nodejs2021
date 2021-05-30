const { v4: uuidv4 } = require('uuid');
/**The class creating a board */
class Board {
  id: string;
  title: string;
  columns: {
    id: string;
    title: string;
    order: number
  }[];
  /**
   * create a board
   * @param {Object.<string, string, Array.<Object.<string, string, number>>>} board with fields id, title, columns that consist id, title, order
   */
  constructor({
    id = uuidv4(),
    title = 'TEST(b title)',
    columns = [
      {
        id: uuidv4(),
        title: 'TEST(c title)',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
  /**
   * static method returns new object board
   * @param {Object} board with fields id, title, columns
   * @returns {Object} returns object board
   */
  static toResponse(board: Board): object {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;