const { v4: uuidv4 } = require('uuid');

import { IBoard } from '../models/board.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/** Board class*/
@Entity()
class Board implements IBoard {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'json', nullable: true })
  columns: { id: string; title: string; order: number }[];

  /**
   * Create a board.
   * @param {object} board 
   * @param {string} board.id board with key id
   * @param {string} board.title board with key title
   * @param {object} columns
   * @param {string} columns columns with key id
   * @param {string} columns columns with key title
   * @param {number} columns columns with key order
   */
  constructor({
    id = uuidv4(),
    title = 'TEST (Board title)',
    columns = [
      {
        id: uuidv4(),
        title: 'TEST (Column title)',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Board to send
   * @param {Board} object board with key values
   * @returns {Board} returns a Board object
   */
  static toResponse(board: {
    id: string;
    title: string;
    columns: { id: string; title: string; order: number }[];
  }): object {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;