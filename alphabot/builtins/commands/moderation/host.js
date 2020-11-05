const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const host = async (channel, [target, filler]) => {
  if(filler !== undefined || target.length < MIN_USERNAME_LENGTH || target.length > MAX_USERNAME_LENGTH) return;

  client.host(channel, target)
    .then((data) => {
      logger.info(channel + ' is now hosting ' + target + ' | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unhost = async (channel) => {
  client.unhost(channel)
    .then((data) => {
      logger.info(channel + ' is not hosting anymore | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

module.exports = {
  host,
  unhost,
};
