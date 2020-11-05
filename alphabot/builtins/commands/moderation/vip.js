const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const vip = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.vip(channel, username)
    .then((data) => {
      logger.info(username + ' has become a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unvip = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.unvip(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

module.exports = {
  vip,
  unvip,
};
