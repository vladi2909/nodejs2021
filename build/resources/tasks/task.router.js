"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_1 = require("./task.model");
const router = require('express').Router();
const tasksService = require('./task.service');
router.route('/').get(async (_req, res) => {
    const tasks = await tasksService.getAllByBoard();
    res.json(tasks.map(task_model_1.Task.toResponse));
});
router.route('/:id').get(async (req, res) => {
    try {
        const task = await tasksService.get(req.params['id']);
        res.status(200).json(task_model_1.Task.toResponse(task));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/').post(async (req, res) => {
    const task = await tasksService.create(new task_model_1.Task({
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        boardId: req.baseUrl.split('/')[2],
        columnId: req.body.columnId,
    }));
    try {
        res.status(201).json(task_model_1.Task.toResponse(task));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').delete(async (req, res) => {
    try {
        const task = await tasksService.deleteById(req.params['id']);
        res.status(200).json(task_model_1.Task.toResponse(task));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').put(async (req, res) => {
    const modifiedTask = {
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        boardId: req.body.boardId,
        columnId: req.body.columnId,
        id: req.params['id'],
    };
    try {
        const task = await tasksService.update(req.params['id'], modifiedTask);
        res.json(task_model_1.Task.toResponse(task));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
module.exports = router;
