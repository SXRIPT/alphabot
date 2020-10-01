const client = require('../../src/alphabot');
const commandHandler = require('../commandHandler');
const moderation = require('../moderation');
const logger = require('../../config/logger');

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

client.on("chat", async (channel, userstate, message, self) => {
  // Don't listen to own messages
  if (self) return;

  const command = await commandHandler.tokenizer(channel, userstate.username, message);
  if(!command) return;

  if(command[0] === 'mod') {
    const canExecuteModCommands = await isAuthorized(channel, userstate.badges, 'moderator');
    if(canExecuteModCommands) await executeModeration(command[1], channel);

    return;
  }
  logger.info("PERMISSIONS: " + command.permission);
  logger.info("BADGES " + userstate.badges);

  const hasPermission = await isAuthorized(channel, userstate.badges, command.permission);
  if(!hasPermission) return;
  logger.info(userstate.username + " can execute command: " + command.command + " " + hasPermission);
});
