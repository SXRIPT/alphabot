const client = require('../../src/alphabot');
const logger = require('../../config/logger');

const chat = async (channel, message) => {
  client.say(channel, message)
    .catch((err) => {
      logger.error(err);
  });
}

const reply = async (channel, message, username) => {
  client.say(channel, `@${username}, ${message}`)
    .catch((err) => {
      logger.error(err);
    });
}

const whisper = async (channel, message, username) => {
  client.whisper(username, message)
    .catch((err) => {
    logger.error(err);
  });
}

module.exports = {
 chat,
 reply,
 whisper,
}
