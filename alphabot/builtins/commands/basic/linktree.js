const linktreeSubCommand = require('../../helpers/linktreeSubCommands');
const isAuthorized = require('../../../helpers/isAuthorized');

const USER_MODULES = 'everyone';

const isLinktreeSubArg = async (arg) => [
  'add',
  'remove',
  'show'].includes(arg);

const executeBuiltInLinktree = async ({channel, args}, userstate) => {
  const isSubArg = await isLinktreeSubArg(args[1]);
  if(isSubArg) await linktreeSubCommand[args[1]].apply(null, [{channel, args}, userstate]);
};

const linktree = async ({channel, args}, userstate) => {
  const canExecute = await isAuthorized(channel, userstate.username, USER_MODULES);
  if(canExecute) await executeBuiltInLinktree({channel, args}, userstate);
};

module.exports = linktree;
