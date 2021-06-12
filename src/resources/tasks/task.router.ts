import { Request, Response } from 'express';
import { Task } from './task.model';
const router = require('express').Router();
const tasksService = require('./task.service');
import { IParamId } from '../../models/paramsId.model';

router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await tasksService.getAllByBoard();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req: Request<IParamId>, res: Response) => {
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

router.route('/:id').delete(async (req: Request<IParamId>, res: Response) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.status(200).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').put(async (req: Request<IParamId>, res: Response) => {
  const modifiedTask = {
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.body.boardId,
    columnId: req.body.columnId,
    id: req.params.id,
  };
  try {
    const task = await tasksService.update(req.params.id, modifiedTask);
    res.json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
