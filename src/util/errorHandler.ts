import { logger } from '../logging/logger';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`${err.status || 500} - ${err.message}`);
  res.status(err.status || 500).send(err.message || 'Here are some Error');
  next(err);
};

module.exports = errorHandler;