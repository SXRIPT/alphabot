const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const subscribers = async (channel) => {
  client.subscribers(channel)
    .then((data) => {
      logger.info(channel + ' subscribers-mode enabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const subscribersoff = async (channel) => {
  client.subscribers(channel)
    .then((data) => {
      logger.info(channel + ' subscribers-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

module.exports = {
  subscribers,
  subscribersoff,
};
