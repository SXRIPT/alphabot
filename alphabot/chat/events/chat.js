const client = require('../../src/alphabot');
const commandHandler = require('../commandHandler');
const moderation = require('../../builtins/commands/moderation');
const commands = require('../../builtins/commands/basic');
const responseHandler = require('../response/responseHandler');
const isAuthorized = require('../../helpers/isAuthorized');
const logger = require('../../config/logger');
const checkMessage = require('../checkMessage');
const {responseParse} = require('../response/responseParser');
const {checkCommandDuration} = require('../../helpers/commandTiming');

const DEFAULT_MODERATION_LEVEL = 'moderator';

const executeModeration = async ({ command, parameters }, channel) => {
  await moderation[command].apply(null, [channel, parameters]);
};

const executeResponse = async (channel, medium, message, user) => {
  await responseHandler[medium].apply(null, [channel, message, user]);
};

const executeBuiltInCommands = async ({channel, args}, userstate) => {
  await commands[args[0]].apply(null, [{channel, args}, userstate]);
};

client.on("chat", async (channel, userstate, message, self) => {
  // Don't listen to own messages
  if (self) return;
  await checkMessage(channel, userstate, message);
  const temp = await commandHandler.tokenizer(channel, userstate.username, message);
  if(!temp) return;
  const {command, args} = temp;

  if(temp[0] === 'mod') {
    const canExecuteModCommands = await isAuthorized(channel, userstate.badges, DEFAULT_MODERATION_LEVEL);
    if(canExecuteModCommands) await executeModeration(temp[1], channel);
    return;
  }

  if(temp[0] === 'builtin') {
    await executeBuiltInCommands(temp[1], userstate);
    return;
  }

  if(!command.enabled) return;
  const hasPermission = await isAuthorized(channel, userstate.badges, command.permission);
  const commandCanBeUsed = await checkCommandDuration(command, channel, userstate.username);
  if(!hasPermission && !commandCanBeUsed) return;
  logger.info(userstate.username + " can execute command: " + command.command + " " + hasPermission);

  const mappedArgs = {channel: {name: channel}, display: userstate['display-name'], username: userstate.username}
  const parsedMessage = await responseParse(command.message, args, mappedArgs);
  logger.info(parsedMessage);
  await executeResponse(channel, command.response, parsedMessage, userstate.username);
});
