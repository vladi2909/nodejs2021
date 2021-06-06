"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const router = require('express').Router();
const usersService = require('./user.service');
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(user_model_1.User.toResponse));
});
router.route('/:id').get(async (req, res) => {
    try {
        const user = await usersService.get(req.params['id']);
        res.status(200).json(user_model_1.User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/').post(async (req, res) => {
    const user = await usersService.create(new user_model_1.User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
    }));
    try {
        res.status(201).json(user_model_1.User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').delete(async (req, res) => {
    try {
        const user = await usersService.deleteById(req.params['id']);
        res.status(200).json(user_model_1.User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').put(async (req, res) => {
    const modifiedUser = {
        id: req.params['id'],
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
    };
    try {
        const user = await usersService.update(req.params['id'], modifiedUser);
        res.json(user_model_1.User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
module.exports = router;
