"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_model_1 = require("./board.model");
const router = require('express').Router();
const boardsService = require('./board.service');
router.route('/').get(async (_req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(board_model_1.Board.toResponse));
});
router.route('/:id').get(async (req, res) => {
    try {
        const board = await boardsService.get(req.params['id']);
        res.json(board_model_1.Board.toResponse(board));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/').post(async (req, res) => {
    const board = await boardsService.create(new board_model_1.Board({
        title: req.body.title,
        columns: req.body.columns,
    }));
    try {
        res.status(201).json(board_model_1.Board.toResponse(board));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').delete(async (req, res) => {
    try {
        const board = await boardsService.deleteById(req.params['id']);
        res.status(200).json(board_model_1.Board.toResponse(board));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').put(async (req, res) => {
    try {
        const modifiedBoard = {
            id: req.params['id'],
            title: req.body.title,
            columns: req.body.columns,
        };
        const board = await boardsService.update(req.params['id'], modifiedBoard);
        res.json(board_model_1.Board.toResponse(board));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
module.exports = router;
