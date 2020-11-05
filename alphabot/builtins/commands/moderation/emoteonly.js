const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const emoteonly = async (channel) => {
  client.emoteonly(channel)
    .then((data) => {
      logger.info(channel + ' emote-only-mode enabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const emoteonlyoff = async (channel) => {
  client.emoteonlyoff(channel)
    .then((data) => {
      logger.info(channel + ' emote-only-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

module.exports = {
  emoteonly,
  emoteonlyoff,
};
