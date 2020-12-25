const client = require('../../src/alphabot');
const logger = require('../../config/logger');
const { isCommand } = require('../../helpers/checkCommand');
const { setExpire } = require('../../middleware/cacheCommands');
const {addCommand, deleteCommand, updateCommand} = require('../../db/commandFunctions');

const buildCommandObj = async (args) => {
  return {
    prefix: args[2].substring(0, 1),
    command: args[2].substring(1),
    message: args.slice(3).join(' '),
  };
};

const add = async ({channel, args}, userstate) => {
  const commandObj = await buildCommandObj(args);
  if(commandObj.prefix !== '' && commandObj.command !== '' && commandObj.message !== '') {
    await addCommand(channel, commandObj).then(() => {
      client.say(channel, `@${userstate.username}, successfully added command ${args[2].substring(1)}`);
    }).catch((err) => {
      logger.error(err.message);
    });
    await setExpire(channel, 0);
  }
};

const edit = async ({channel, args}, userstate) => {
  const commandObj = await buildCommandObj(args);
  if(commandObj.prefix !== '' && commandObj.command !== '' && commandObj.message !== '') {
    await updateCommand(channel, commandObj).then(() => {
      client.say(channel, `@${userstate.username}, successfully updated command ${args[2].substring(1)}`);
    }).catch((err) => {
      logger.error(err.message);
    });
    await setExpire(channel, 0);
  }
};

const remove = async ({channel, args}, userstate) => {
  await deleteCommand(channel, args[2].substring(1)).then(() => {
    client.say(channel, `@${userstate.username}, successfully deleted command ${args[2].substring(1)}`);
  }).catch((err) => {
    logger.error(err.message);
  });
  await setExpire(channel,0);
};

const show = async ({channel, args}, userstate) => {
  const showCommand = await isCommand(channel, args[2]);
  if(showCommand) await client.say(channel, `@${userstate.username}, ${showCommand.message}`);
};

module.exports = {
  add,
  edit,
  remove,
  show
};
