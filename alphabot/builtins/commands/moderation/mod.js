const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const mod = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.mod(channel, username)
    .then((data) => {
      logger.info(username + ' has become a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unmod = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.unmod(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

module.exports = {
  mod,
  unmod,
};
