"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
exports.app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
exports.app.use(express.json());
exports.app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
exports.app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
exports.app.use('/users', userRouter);
exports.app.use('/boards', boardRouter);
exports.app.use('/boards/:boardId/tasks', taskRouter);
