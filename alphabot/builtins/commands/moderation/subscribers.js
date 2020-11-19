const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const subscribers = async channel => {
  client.subscribers(channel)
    .then(data => {
      logger.info(channel + ' subscribers-mode enabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

const subscribersoff = async channel => {
  client.subscribers(channel)
    .then(data => {
      logger.info(channel + ' subscribers-mode disabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

module.exports = {
  subscribers,
  subscribersoff
};
