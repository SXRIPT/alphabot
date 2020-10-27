const client = require('../../src/alphabot');
const commandHandler = require('../commandHandler');
const moderation = require('../commands/moderation');
const responseHandler = require('../commands/responseHandler');
const logger = require('../../config/logger');
const {responseParse} = require('../commands/responseParser');

const DEFAULT_MODERATION_LEVEL = 'moderator';

/*
   Checks if a user is authorized to execute a command
   this is being checked with the badges of the user which are
   sent with on every message by twitch-tmi
 */
const isAuthorized = async (channel, badges, permission) => {
  if(permission === 'everyone') return true;
  if(permission !== 'everyone' && badges === null) return false;
  if(permission === 'subscriber' && (badges.subscriber !== undefined || badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  if(permission === 'vip' && (badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  if(permission === 'moderator' && (badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  return permission === 'broadcaster' && badges.broadcaster !== undefined;
};

const executeModeration = async ({ command, parameters }, channel) => {
  await moderation[command].apply(null, [channel, parameters]);
};

const executeResponse = async (channel, medium, message, user) => {
  await responseHandler[medium].apply(null, [channel, message, user]);
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
