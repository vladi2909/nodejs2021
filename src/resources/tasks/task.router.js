const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAllByBoard();
    res.json(tasks.map(Task.toResponse));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;