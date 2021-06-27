import express, { Errback, Request, Response, NextFunction } from 'express';
import path from 'path';
import * as swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import { loginRouter } from './resources/login/login.router';
import morgan from './logging/morganConfig';
import { checkTokenIsCorrect } from './middleware/jwt';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(morgan);
app.use(checkTokenIsCorrect);
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
app.use('/login', loginRouter);

app.use(
  (_err: Errback, _req: Request, res: Response, next: NextFunction): void => {
    res.status(500);
    next();
  }
);

export default app;
