const client = require('../../src/alphabot');
const commandHandler = require('../commandHandler');
const moderation = require('../commands/modules/moderation');
const builtin = require('../commands/modules/builtin');
const responseHandler = require('../commands/responseHandler');
const isAuthorized = require('../commands/isAuthorized');
const logger = require('../../config/logger');
const {responseParse} = require('../commands/responseParser');

const DEFAULT_MODERATION_LEVEL = 'moderator';

const executeModeration = async ({ command, parameters }, channel) => {
  await moderation[command].apply(null, [channel, parameters]);
};

const executeResponse = async (channel, medium, message, user) => {
  await responseHandler[medium].apply(null, [channel, message, user]);
};

const executeBuiltIn = async ({channel, args}, userstate) => {
  await builtin[args[0]].apply(null, [{channel, args}, userstate]);
};

client.on("chat", async (channel, userstate, message, self) => {
  // Don't listen to own messages
  if (self) return;
  const temp = await commandHandler.tokenizer(channel, userstate.username, message);

  if(!temp) return;
  const {command, args} = temp;

  if(temp[0] === 'mod') {
    const canExecuteModCommands = await isAuthorized(channel, userstate.badges, DEFAULT_MODERATION_LEVEL);
    if(canExecuteModCommands) await executeModeration(temp[1], channel);
    return;
  }

  if(temp[0] === 'builtin') {
    await executeBuiltIn(temp[1], userstate);
    return;
  }
  logger.info("PERMISSIONS: " + command.permission);
  logger.info("BADGES " + userstate.badges);

  const hasPermission = await isAuthorized(channel, userstate.badges, command.permission);
  if(!hasPermission) return;
  logger.info(userstate.username + " can execute command: " + command.command + " " + hasPermission);

  const mappedArgs = {channel: {name: channel}, display: userstate['display-name'], username: userstate.username}
  const parsedMessage = await responseParse(command.message, args, mappedArgs);
  logger.info(parsedMessage);
  await executeResponse(channel, command.response, parsedMessage, userstate.username);
});
