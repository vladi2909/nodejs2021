import { Errback, Request, Response, NextFunction } from 'express';
import express from 'express';

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const app = express();
const morgan = require('./logging/morganConfig');
const logger = require('./logging/logger');
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(morgan);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks', taskRouter);

app.use(
  (_err: Errback, _req: Request, res: Response, next: NextFunction): void => {
    res.status(500);
    next();
  }
);

process.on('uncaughtException', (error) => {
  logger.error(`UncaughtException: ${error.message}`);
  process.exitCode = 1;
});

process.on('unhandledRejection', (error) => {
  logger.error(`unhandledRejection: ${error}`);
  process.exitCode = 1;
});

module.exports = app;
