const client = require('../../src/alphabot');
const commandHandler = require('../commandHandler');
const moderation = require('../../builtins/commands/moderation');
const commands = require('../../builtins/commands/basic');
const responseHandler = require('../response/responseHandler');
const isAuthorized = require('../../helpers/isAuthorized');
const logger = require('../../config/logger');
const {responseParse} = require('../response/responseParser');

const DEFAULT_MODERATION_LEVEL = 'moderator';

const executeModeration = async ({command, parameters}, channel) => {
  await Reflect.apply(moderation[command], null, [channel, parameters]);
};

const executeResponse = async (channel, medium, message, user) => {
  await Reflect.apply(responseHandler[medium], null, [channel, message, user]);
};

const executeBuiltInCommands = async ({channel, args}, userstate) => {
  await Reflect.apply(commands[args[0]], null, [{channel, args}, userstate]);
};

client.on('chat', async (channel, userstate, message, self) => {
  // Don't listen to own messages
  if (self) {
    return;
  }

  const temporary = await commandHandler.tokenizer(channel, userstate.username, message);

  if (!temporary) {
    return;
  }

  const {command, args} = temporary;

  if (temporary[0] === 'mod') {
    const canExecuteModCommands = await isAuthorized(channel, userstate.badges, DEFAULT_MODERATION_LEVEL);
    if (canExecuteModCommands) {
      await executeModeration(temporary[1], channel);
    }

    return;
  }

  if (temporary[0] === 'builtin') {
    await executeBuiltInCommands(temporary[1], userstate);
    return;
  }

  logger.info('PERMISSIONS: ' + command.permission);
  logger.info('BADGES ' + userstate.badges);

  const hasPermission = await isAuthorized(channel, userstate.badges, command.permission);
  if (!hasPermission) {
    return;
  }

  logger.info(userstate.username + ' can execute command: ' + command.command + ' ' + hasPermission);

  const mappedArgs = {channel: {name: channel}, display: userstate['display-name'], username: userstate.username};
  const parsedMessage = await responseParse(command.message, args, mappedArgs);
  logger.info(parsedMessage);
  await executeResponse(channel, command.response, parsedMessage, userstate.username);
});
