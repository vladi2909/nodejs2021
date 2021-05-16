const User = require('../resources/users/user.model');

const Database = {
  users: [],
  boards: [],
  tasks: [],
};

Database.users.push(new User(), new User());

const getAllUsers = async () => [...Database.users];

const getUser = async id => Database.users.filter(item => item.id === id)[0];

const createUser = async user => {
  Database.users.push(user);
  return user;
};

const delUser = async id => {
  const deletion = Database.users.filter(item => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.users = Database.users.filter(user => user.id !== deletion.id);
  return deletion;
};

module.exports = { getAllUsers, getUser, createUser, delUser };