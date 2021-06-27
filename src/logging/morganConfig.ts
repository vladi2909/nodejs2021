const morgan = require('morgan');
import { logger } from './logger';
import { Request } from 'express';

morgan.token('query', (req: { query: Request }) => {
  return `query: ${JSON.stringify(req.query)}`;
});
morgan.token('params', (req: { params: Request }) => {
  return `params: ${JSON.stringify(req.params)}`;
});
morgan.token('body', (req: { body: Request }) => {
  return `body: ${JSON.stringify(req.body)}`;
});

export default morgan(
  '[:date[web]] :method :url :status :query :params :body - :response-time ms',
  {
    stream: logger.stream,
  }
);