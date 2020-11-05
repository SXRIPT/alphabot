const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isNumber, isFinite} = require('../../../utils/numbers');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const timeout = async (channel, parameters) => {
  const username = parameters[0];
  if(parameters.length > 3 || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  let duration = 300;
  let reason = '';

  if(parameters.length > 1) {
    duration = isNumber(parameters[1]) && isFinite(parameters[1]) ? parameters[1] : 300;

    if (!isNumber(parameters[1])) {
      [, reason] = parameters; // eslint prefer-destructuring
    } else if (!isNumber(parameters[2]) && parameters.length > 2) {
      [,, reason] = parameters; // eslint prefer-destructuring
    }
  }

  client.timeout(channel, username, duration, reason)
    .then((data) => {
      logger.info('User ' + username + ' has been timed out for ' + duration + ' in ' + channel + ' | ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

module.exports = timeout;
