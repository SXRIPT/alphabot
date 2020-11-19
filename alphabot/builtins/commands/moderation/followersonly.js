const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isNumber, isFinite} = require('../../../utils/numbers');

const followersonly = async (channel, [duration = 30, filler]) => {
  if (filler !== undefined || !isNumber(duration) && !isFinite(duration)) {
    return;
  }

  client.followersonly(channel, duration)
    .then(data => {
      logger.info(channel + ' follower-only-mode enabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

const followersonlyoff = async channel => {
  client.followersonlyoff(channel)
    .then(data => {
      logger.info(channel + ' follower-only-mode disabled ' + data);
    }).catch(error => {
      logger.error(error);
    });
};

module.exports = {
  followersonly,
  followersonlyoff
};
