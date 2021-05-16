const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const Database = {
  users: [],
  boards: [],
  tasks: [],
};

Database.users.push(new User(), new User());

const getAllUsers = async () => Database.users.slice(0);

const getUser = async (id) =>
  Database.users.filter((item) => item.id === id)[0];

const createUser = async (user) => {
  Database.users.push(user);
  return user;
};

const delUser = async (id) => {
  const deletion = Database.users.filter((item) => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.users = Database.users.filter((user) => user.id !== deletion.id);
  return deletion;
};

const updateUser = async (id, modUser) => {
  const user = Database.users.filter((item) => item.id === id)[0];
  if (!user) {
    return false;
  }

  Database.users = Database.users.map((item) => {
    if (item.id === id) {
      return modUser;
    }

    return item;
  });

  return modUser;
};

Database.boards.push(new Board(), new Board());

const getAllBoards = async () => Database.boards.slice(0);

const getBoard = async (id) =>
  Database.boards.filter((item) => item.id === id)[0];

const createBoard = async (board) => {
  Database.boards.push(board);
  return board;
};

const delBoard = async (id) => {
  const deletion = Database.boards.filter((item) => item.id === id)[0];
  if (!deletion) {
    return false;
  }
  Database.boards = Database.boards.filter((board) => board.id !== deletion.id);
  return deletion;
};

const updateBoard = async (id, modBoard) => {
  const board = Database.boards.filter((item) => item.id === id)[0];
  if (!board) {
    return false;
  }

  Database.boards = Database.boards.map((item) => {
    if (item.id === id) {
      return modBoard;
    }

    return item;
  });

  return modBoard;
};

Database.tasks.push(new Task(), new Task());

const getAllTasksByBoard = async () => Database.tasks.slice(0);

const getTask = async id => Database.tasks.filter(item => item.id === id)[0];

const createTask = async task => {
  Database.tasks.push(task);
  return task;
};

const updateTask = async (id, modTask) => {
  const task = Database.tasks.filter(item => item.id === id)[0];
  if (!task) {
    return false;
  }

  Database.tasks = Database.tasks.map(item => {
    if (item.id === id) {
      return modTask;
    }

    return item;
  });

  return modTask;
};

const delTask = async id => {
  const deletion = Database.tasks.filter(item => item.id === id)[0];
  if (!deletion) {
    return false;
  }

  Database.boards = Database.boards.filter(board => board.id !== deletion.id);
  return deletion;
};

const delTasksUserId = async userId => {
    Database.tasks = Database.tasks.map(item =>
    item.userId === userId ? { ...item, userId: null } : { ...item }
  );
};

const delTasksByBoard = async boardId => {
  Database.tasks = Database.tasks.filter(item => item.boardId !== boardId);
  return Database.tasks;
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  delUser,
  updateUser,
  getAllBoards,
  getBoard,
  createBoard,
  delBoard,
  updateBoard,
  getAllTasksByBoard,
  getTask,
  createTask,
  delTask,
  updateTask,
  delTasksUserId,
  delTasksByBoard,
};
