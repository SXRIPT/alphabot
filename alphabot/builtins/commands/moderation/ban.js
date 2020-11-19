const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const ban = async (channel, [username, reason = '', filler]) => {
  if (filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) {
    return;
  }

  client.ban(channel, username, reason)
    .then(data => {
      logger.info(username + 'has been banned from ' + channel + ' | ' + data);
    }).catch(error => {
      logger.error(error);
    }
    );
};

const unban = async (channel, [username, filler]) => {
  if (filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) {
    return;
  }

  client.unban(channel, username)
    .then(data => {
      logger.info(username + 'has been unbanned from ' + channel + ' | ' + data);
    }).catch(error => {
      logger.error(error);
    }
    );
};

module.exports = {
  ban,
  unban
};
