const client = require('../../src/alphabot');
const logger = require('../../config/logger');
const {isCommand} = require('../../helpers/checkCommand');
const {setExpire} = require('../../middleware/cacheCommands');
const {addCommand, deleteCommand, updateCommand} = require('../../db/commandFunctions');

const buildCommandObject = async args => {
  return {
    prefix: args[2].slice(0, 1),
    command: args[2].slice(1),
    message: args.slice(3).join(' ')
  };
};

const add = async ({channel, args}, userstate) => {
  const commandObject = await buildCommandObject(args);
  if (commandObject.prefix !== '' && commandObject.command !== '' && commandObject.message !== '') {
    await addCommand(channel, commandObject).then(() => {
      client.say(channel, `@${userstate.username}, successfully added command ${args[2].slice(1)}`);
    }).catch(error => {
      logger.error(error.message);
    });
    await setExpire(channel, 0);
  }
};

const edit = async ({channel, args}, userstate) => {
  const commandObject = await buildCommandObject(args);
  if (commandObject.prefix !== '' && commandObject.command !== '' && commandObject.message !== '') {
    await updateCommand(channel, commandObject).then(() => {
      client.say(channel, `@${userstate.username}, successfully updated command ${args[2].slice(1)}`);
    }).catch(error => {
      logger.error(error.message);
    });
    await setExpire(channel, 0);
  }
};

const remove = async ({channel, args}, userstate) => {
  await deleteCommand(channel, args[2].slice(1)).then(() => {
    client.say(channel, `@${userstate.username}, successfully deleted command ${args[2].slice(1)}`);
  }).catch(error => {
    logger.error(error.message);
  });
  await setExpire(channel, 0);
};

const show = async ({channel, args}, userstate) => {
  const showCommand = await isCommand(channel, args[2]);
  if (showCommand) {
    await client.say(channel, `@${userstate.username}, ${showCommand.message}`);
  }
};

module.exports = {
  add,
  edit,
  remove,
  show
};
