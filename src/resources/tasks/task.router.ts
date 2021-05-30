const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');
import { Request, Response } from 'express';

router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await tasksService.getAllByBoard();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const task = await tasksService.get(req.params.id);
    res.status(200).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
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

router.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const task = await tasksService.delById(req.params.id);
    res.status(200).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const modTask = {
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.body.boardId,
    columnId: req.body.columnId,
    id: req.params.id,
  };

  try {
    const task = await tasksService.update(req.params.id, modTask);
    res.json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
