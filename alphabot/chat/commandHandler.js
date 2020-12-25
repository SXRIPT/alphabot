const checkCommand = require('../helpers/checkCommand');

const createObject = async (array) => {
  const channel = array[0];
  const command = array[1];
  const parameters = array[2];
  return {
    channel,
    command,
    parameters,
  };
};

const isModeration = async (command) => [
  'ban',
  'unban',
  'timeout',
  'emoteonly',
  'emoteonlyoff',
  'followersonly',
  'followersonlyoff',
  'r9kbeta',
  'r9kbetaoff',
  'slow',
  'slowoff',
  'subscribers',
  'subscribersoff',
  'mod',
  'unmod',
  'vip',
  'unvip',
  'clear',
  'host',
  'unhost',
  'commercial',
].includes(command);

const isBuiltIn = async (command) => [
  'accountage',
  'settitle',
  'setgame',
  'followage',
  'command',
  'commands',
  'vanish',
  'commands',
  'banphrase',
  'linktree'].includes(command);

const parseMessage = async (message) => {
  return message.indexOf(' ') === -1
      ? message.substring(1)
      : message.substring(1, message.indexOf(' '));
}

const tokenizer = async (channel, user, message) => {
  /*
  *  checks if the chat message start with one of the allowed
  *  characters for a command later it will be checked if it
  *  is the right character for the command.
  */
  const regex = /^[`!%^&_+\-=;:.<>?~]/;
  if(!regex.test(message.charAt(0))) return;

  const token = [];
  // tmi sends the channel with a # at the start
  // e.g. #channel_name but we only need channel_name
  channel = channel.replace('#', '');
  token.push(channel, user, message);

  const parsedMessage = await parseMessage(message);

  const isModerationCommand = await isModeration(parsedMessage);
  if(isModerationCommand) {
    const msgArr = message.split(' ');
    const modCommand = await createObject([channel, msgArr[0].substring(1), msgArr.slice(1)]);
    return ['mod', modCommand];
  }

  const isBuiltin = await isBuiltIn(parsedMessage);
  if(isBuiltin) {
    const args = message.split(' ');
    args[0] = args[0].substring(1);
    return ['builtin', {channel, args}]
  }

  // Checks if the channel has the command
  const commandNoArgs = token[2].split(' ');
  const command = await checkCommand.isCommand(token[0], commandNoArgs[0]);
  if (!command) return;

  return {command, args: commandNoArgs.splice(1)};
};

module.exports = {
  tokenizer,
};
