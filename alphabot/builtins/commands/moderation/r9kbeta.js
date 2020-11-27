const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const r9kbeta = async (channel) => {
  client.r9kbeta(channel)
    .then((data) => {
      logger.info(channel + ' r9kbeta-mode enabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const r9kbetaoff = async (channel) => {
  client.r9kbetaoff(channel)
    .then((data) => {
      logger.info(channel + ' r9kbeta-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

module.exports = {
  r9kbeta,
  r9kbetaoff,
};
