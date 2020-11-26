const client = require('../../src/alphabot');
const logger = require('../../config/logger');

const TIMEOUT = 'timeout';
const BAN = 'ban';

const executePenalty = async (channel, username, penalty, timeoutDuration, reason) => {
  if(penalty === TIMEOUT) {
    client.timeout(channel, username, timeoutDuration)
      .then((data) => {
        logger.info('User ' + username + ' has been timed out for ' + timeoutDuration + ' in ' + channel + ' for ' + reason + ' | ' + data);
      }).catch((err) => {
      logger.error(err);
    });
  } else if(penalty === BAN) {
    client.ban(channel, username, )
      .then((data) => {
        logger.info('User ' + username + ' has been banned in ' + channel + ' for ' + reason + ' | ' + data);
      }).catch((err) => {
      logger.error(err);
    });
  }
};

module.exports = executePenalty;
