const client = require('../../src/alphabot');
const logger = require('../../config/logger');

const chat = async (channel, message) => {
  client.say(channel, message)
    .catch(error => {
      logger.error(error);
    });
};

const whisper = async (channel, message, username) => {
  client.whisper(username, message)
    .catch(error => {
      logger.error(error);
    });
};

module.exports = {
  chat,
  whisper
};
