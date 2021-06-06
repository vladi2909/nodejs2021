const { v4: uuidv4 } = require('uuid');

/** Class representing a Task. */
export class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

  columnId: string;

  /**
   * Create a task.
   * @param {Object.<string, string, number, string, string, string, string>} object task with key values id, title, order, description, userId, boardId, columnId.
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
   *
   * @param {Object}  object task with key values id, title, order, description, userId, boardId, columnId.
   * @returns {Object} returns a Task object
   */
  static toResponse(task: {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
  }): object {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
