const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const isAuthorized = require('../../../helpers/isAuthorized');

const USER_MODULES = 'everyone';

const commands = async ({channel}, {username}) => {
  const canExecute = await isAuthorized(channel, username, USER_MODULES);
  if (canExecute) {
    client.say(channel, `@${username} | http://alphabot.wtf/${channel}/commands`)
      .catch(error => {
        logger.error(error);
      });
  }
};

module.exports = commands;
