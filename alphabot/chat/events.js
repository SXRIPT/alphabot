const client = require('../src/alphabot');
const chatTokenizer = require('../helpers/chatTokenizer');
const moderation = require('./moderation');
const logger = require('../config/logger');

client.on("chat", async (channel, userstate, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  const command = await chatTokenizer.tokenizer(channel, userstate.username, message);
  if(!command) return;


  logger.info("PERMISSIONS: " + command.permission);
  logger.info("BADGES " + userstate.badges);
  const hasPermission = await isAllowed(channel, userstate.badges, command.permission)
  if(!hasPermission) return;
  logger.info(userstate.username + " can execute command: " + command.command + " " + hasPermission);
  const isModerationCommand = await isModeration(command);
  if(isModerationCommand) {
    switch (command.command)  {
      case "ban":
        if(command.parameters[0])
          await moderation.ban(channel, command.parameters[0], command.parameters[1] !== undefined ? command.parameters[1] : '');
        break;
      case "unban":
        if(command.parameters[0])
          await moderation.unban(channel, command.parameters[0]);
        break;
      case "timeout":
        if(command.parameters[0])
          await moderation.timeout(channel, command.parameters[0], command.parameters[1] !== undefined ? command.parameters[1] : 300, command.parameters[2] !== undefined ? command.parameters[2] : '');
        break;
      case "emoteonly":
        await moderation.emoteonly(channel);
        break;
      case "emoteonlyoff":
        await moderation.emoteonlyoff(channel);
        break;
      case "followersonly":
        await moderation.followersonly(channel,command.parameters[0] !== undefined ? command.parameters[0] : 30);
        break;
      case "followersonlyoff":
        await moderation.followersonlyoff(channel);
        break;
      case "r9kbeta":
        await moderation.r9kbeta(channel);
        break;
      case "r9kbetaoff":
        await moderation.r9kbetaoff(channel);
        break;
      case "slow":
        await moderation.slow(channel, command.parameters[0] !== undefined ? command.parameters[0] : 30);
        break;
      case "slowoff":
        await moderation.slowoff(channel);
        break;
      case "subscribers":
        await moderation.subscribers(channel);
        break;
      case  "subscribersoff":
        await moderation.subscribersoff(channel);
        break;
      case  "mod":
        if(command.parameters[0])
          await moderation.mod(channel, command.parameters[0]);
        break;
      case  "unmod":
        if(command.parameters[0])
          await moderation.unmod(channel, command.parameters[0]);
        break;
      case  "vip":
        if(command.parameters[0])
          await moderation.vip(channel, command.parameters[0]);
        break;
      case  "unvip":
        if(command.parameters[0])
          await moderation.unvip(channel, command.parameters[0]);
        break;
      case  "clear":
        await moderation.clear(channel);
        break;
      case  "host":
        if(command.parameters[0])
          await moderation.host(channel, command.parameters[0]);
        break;
      case  "unhost":
        await moderation.unhost(channel);
        break;
      case  "commercial":
        if(command.parameters[0])
          await moderation.commercial(channel, command.parameters[0]);
        break;
    }
  }

});

const isAllowed = async (channel, badges, permission) => {
  if(permission === 'everyone') return true;
  if(permission !== 'everyone' && badges === null) return false;
  if(permission === 'subscriber' && (badges.subscriber !== undefined || badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  if(permission === 'vip' && (badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  if(permission === 'moderator' && (badges.moderator !== undefined || badges.broadcaster !== undefined)) return true;
  return permission === 'broadcaster' && badges.broadcaster !== undefined;
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
  'commercial'].includes(command);
