const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
import { Request, Response } from 'express';

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const board = await boardsService.get(req.params['id']);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns,
    })
  );
  try {
    res.status(201).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const board = await boardsService.delById(req.params['id']);
    res.status(200).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:id').put(async (req: Request, res: Response) => {
    try {
      const modBoard = {
        id: req.params['id'],
        title: req.body.title,
        columns: req.body.columns,
      };
      const board = await boardsService.update(req.params['id'], modBoard);
      res.json(Board.toResponse(board));
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

module.exports = router;
