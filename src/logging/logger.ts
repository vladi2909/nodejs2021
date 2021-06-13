const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.cli(),
    }),
    new winston.transports.File({
      filename: './logs/errors.log',
      handleExceptions: false,
      level: 'error',
      colorize: true,
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: './logs/info.log',
      level: 'info',
      colorize: true,
      format: winston.format.simple(),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './logs/exceptions.log',
      format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize()
      ),
    }),
  ],
  exitOnError: true,
});

logger.stream = {
  write(message: string) {
    logger.info(message);
  },
};

process.on('uncaughtException', (error) => {
  logger.error(`uncaughtException: ${error.message}`);
  process.exitCode = 1;
});

process.on('unhandledRejection', (error) => {
  logger.error(`unhandledRejection: ${error}`);
  process.exitCode = 1;
});

module.exports = logger;
