const { v4: uuidv4 } = require('uuid');
/**The class creating a task */
class Task {
  /**
   * create a task
   * @param {Object.<string, string, number, string, string, string, string>} task with fields id, title, order, description, userId, boardId, columnId
   */
  constructor({
    id = uuidv4(),
    title = 'TEST(Task title)',
    order = 0,
    description = 'TEST(Task description)',
    userId = 'TEST(Task userId)',
    boardId = 'TEST(Task userId)',
    columnId = 'TEST(Task userId)',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
  /**
   * static method returns new object task
   * @param {Object} task with fields id, title, order, description, userId, boardId, columnId
   * @returns {object} return object task
   */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;