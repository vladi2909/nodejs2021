const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
});
router.route('/:id').get(async (req, res) => {
    try {
        const user = await usersService.get(req.params['id']);
        res.status(200).json(User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/').post(async (req, res) => {
    const user = await usersService.create(new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
    }));
    try {
        res.status(201).json(User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').delete(async (req, res) => {
    try {
        const user = await usersService.delById(req.params['id']);
        res.status(200).json(User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
router.route('/:id').put(async (req, res) => {
    const modUser = {
        id: req.params['id'],
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
    };
    try {
        const user = await usersService.update(req.params['id'], modUser);
        res.json(User.toResponse(user));
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
module.exports = router;