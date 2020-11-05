const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isNumber, isFinite} = require('../../../utils/numbers');

const slow = async (channel, [duration = 30, filler]) => {
  if(filler !== undefined || !isNumber(duration) && !isFinite(duration)) return;

  client.slow(channel, duration)
    .then((data) => {
      logger.info(channel + ' slow-mode enabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const slowoff = async (channel) => {
  client.slowoff(channel)
    .then((data) => {
      logger.info(channel + ' slow-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

module.exports = {
  slow,
  slowoff,
};
