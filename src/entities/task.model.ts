const { v4: uuidv4 } = require('uuid');
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ITask } from '../models/task.model';
import User from './user.model';
import Board from './board.model';

/** Task class*/
@Entity()
class Task implements ITask {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column({ type: 'text', nullable: true })
  userId: User['id'] | null;

  @Column({ type: 'text' })
  boardId: Board['id'];

  @Column({ type: 'text', nullable: true })
  columnId: string;

  /**
   * Create a task.
   * @param {object} task
   * @param {string} task.id task with key id
   * @param {string} task.title task with key title
   * @param {number} task.order task with key title
   * @param {string} task.description task with key description
   * @param {string} task.userId task with key userId
   * @param {string} task.boardId task with key boardId
   * @param {string} task.columnId task with key columnId
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
   * Task to send
   * @param {Task} object task with key values
   * @returns {Task} returns a task
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

export default Task;
