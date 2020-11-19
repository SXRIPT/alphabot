const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const emoteonly = async channel => {
  client.emoteonly(channel)
    .then(data => {
      logger.info(channel + ' emote-only-mode enabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

const emoteonlyoff = async channel => {
  client.emoteonlyoff(channel)
    .then(data => {
      logger.info(channel + ' emote-only-mode disabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

module.exports = {
  emoteonly,
  emoteonlyoff
};
