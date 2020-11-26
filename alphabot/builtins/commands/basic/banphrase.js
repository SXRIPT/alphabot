const banphraseSubCommands = require('../../helpers/banphraseSubCommands');
const isAuthorized = require('../../../helpers/isAuthorized');

const MOD_MODULES = 'moderator';

const isCommandSubArg = async (arg) => [
  'add',
  'remove',
].includes(arg);

const executeBuiltInBanphrase = async ({channel, args}, userstate) => {
  const isSubArg = await isCommandSubArg(args[1]);
  if(isSubArg) await banphraseSubCommands[args[1]].apply(null, [{channel, args}, userstate]);
};

const banphrase = async ({channel, args}, userstate) => {
  const canExecute = await isAuthorized(channel, userstate.badges, MOD_MODULES);
  if(canExecute) await executeBuiltInBanphrase({channel, args}, userstate);
};

module.exports = banphrase;
