const { v4: uuidv4 } = require('uuid');

/** Class representing a User. */
export class User {
  id: string;

  name: string;

  login: string;

  password: string;

  /**
   * Create a user.
   * @param {Object.<string, string, string, string>} object user with key values id, name, login, password.
   */
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
   *
   * @param {Object} object user with key values id, name, login, password
   * @returns {Object} returns a User object
   */
  static toResponse(user: { id: string; name: string; login: string }): object {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
