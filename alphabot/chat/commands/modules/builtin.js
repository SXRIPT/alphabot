const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const builtInCmdHelpers = require('../builtInCommandHelpers');
const isAuthorized = require('../isAuthorized');

const USER_MODULES = 'everyone';
const MOD_MODULES = 'moderator';

const isCommandSubArg = async (arg) => [
  'add',
  'remove',
  'show',
  'edit',].includes(arg);

const executeBuiltInCommand = async ({channel, args}, userstate) => {
  const isSubArg = await isCommandSubArg(args[1]);
  if(isSubArg) await builtInCmdHelpers[args[1]].apply(null, [{channel, args}, userstate]);
};

const accountage = async () => {

};

const settitle = async () => {

};

const setgame = async () => {

};

const followage = async () => {

};

const command = async ({channel, args}, userstate) => {
  const canExecute = await isAuthorized(channel, userstate.badges, MOD_MODULES);
  if(canExecute) await executeBuiltInCommand({channel, args}, userstate);
};

const vanish = async ({channel}, {username}) => {
  const canExecute = await isAuthorized(channel, username, USER_MODULES);
  if(canExecute) {
    client.timeout(channel, username, 1)
      .catch((err) => {
      logger.error(err);
    });
  }
};

module.exports = {
  accountage,
  settitle,
  setgame,
  followage,
  command,
  vanish,
};
