import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
const { v4: uuidv4 } = require('uuid');

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100})
  name: string;

  @Column({
    unique: true,
    length: 50
  })
  login: string;

  @Column({length: 20})
  password: string;

  constructor({
    id = uuidv4(),
    name = 'TEST (User name)',
    login = 'TEST (User login)',
    password = 'TEST (User password)',
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
