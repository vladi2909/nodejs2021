const { v4: uuidv4 } = require('uuid');
/**The class creating a user */
export class User {
  id: string;
  name: string;
  login: string;
  password: string;
  /**
   * create a user
   * @param {Object.<string, string, string, string>} user with fields id, name, login, password
   */
  constructor({
    id = uuidv4(),
    name = 'TEST (u name)',
    login = 'TEST (u login)',
    password = 'TEST (u password)'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
  /**
   * Create a new user without a password
   * @param {Object} user with fields id, name, login, password
   * @returns {Object} returns object user without field password
   */
  static toResponse(user: User): object {
    const { id, name, login } = user;
    return { id, name, login };
  }
}