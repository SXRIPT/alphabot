const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const isAuthorized = require('../isAuthorized');

const USER_MODULES = 'everyone';

const vanish = async ({channel}, {username}) => {
  const canExecute = await isAuthorized(channel, username, USER_MODULES);
  if(canExecute) {
    client.timeout(channel, username, 1, "VANISH")
      .catch((err) => {
        logger.error(err);
      });
  }
};

module.exports = vanish;
