const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoard();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id);
    res.status(200).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.baseUrl.split('/')[2],
      columnId: req.body.columnId,
    })
  );

  try {
    res.status(201).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
