/* eslint-disable @typescript-eslint/no-explicit-any */
const winston = require('winston');
// import { path } from '../common/config';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.cli(),
    }),
    new winston.transports.File({
      filename: './src/logging/logs/errors.log',
      handleExceptions: false,
      level: 'error',
      colorize: true,
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: './src/logging/logs/info.log',
      level: 'info',
      colorize: true,
      format: winston.format.simple(),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './src/logging/logs/exceptions.log',
      format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize()
      ),
    }),
  ],
  exitOnError: true,
});

logger.stream = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  write(message: any, _encoding: any) {
    logger.info(message);
  },
};

module.exports = logger;