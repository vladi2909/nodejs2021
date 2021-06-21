const { v4: uuidv4 } = require('uuid');
import { IUser } from '../models/user.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/** User class */
@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  /**
   * Create a user.
   * @param {object} user
   * @param {string} user.id user with key id
   * @param {string} user.name user with key name
   * @param {string} user.login user with key login
   * @param {string} user.password user with key password
   */
  constructor({
    id = uuidv4(),
    name = 'TEST',
    login = 'TEST',
    password = 'TEST',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * User to send
   * @param {User} user user with key values
   * @returns {User} returns a User object
   */
  static toResponse(user: { id: string; name: string; login: string }): object {
    const { id, name, login } = user;
    return { id, name, login };
  }

}

export default User;
