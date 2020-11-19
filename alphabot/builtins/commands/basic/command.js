const cmdSubCommands = require('../../helpers/commandSubCommands');
const isAuthorized = require('../../../helpers/isAuthorized');

const MOD_MODULES = 'moderator';

const isCommandSubArg = async arg => [
  'add',
  'remove',
  'show',
  'edit'
].includes(arg);

const executeBuiltInCommand = async ({channel, args}, userstate) => {
  const isSubArg = await isCommandSubArg(args[1]);
  if(isSubArg) await cmdSubCommands[args[1]].apply(null, [{channel, args}, userstate]);
};

const command = async ({channel, args}, userstate) => {
  const canExecute = await isAuthorized(channel, userstate.badges, MOD_MODULES);
  if (canExecute) await executeBuiltInCommand({channel, args}, userstate);
};

module.exports = command;
