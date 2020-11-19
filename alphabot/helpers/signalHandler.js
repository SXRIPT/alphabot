const logger = require('../config/logger');

const signals = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15
};

const shutdown = (signal, value) => {
  logger.info(`server stopped by ${signal} with value ${value}`);
  process.exit = 128 + value;
};

const signalListener = () => {
  signals.forEach(signal => {
    process.on(signal, () => {
      logger.info(`process received a ${signal} signal`);
      shutdown(signal, signals[signal]);
    });
  });
};

module.exports = signalListener;
