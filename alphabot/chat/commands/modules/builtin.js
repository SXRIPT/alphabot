const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isCommand} = require('../../../helpers/checkCommand');
const {addCommand, deleteCommand, updateCommand} = require('../../../db/commandFunctions')
const isAuthorized = require('../isAuthorized');

const USER_MODULES = 'everyone';
const MOD_MODULES = 'moderator';

const buildCommandObj = async (args) => {
  return {
    prefix: args[2].substring(0, 1),
    command: args[2].substring(1),
    message: args.slice(3).join(' '),
  };
};

const accountage = async () => {

};

const settitle = async () => {

};

const setgame = async () => {

};

const followage = async () => {

};

const add = async ({channel, args}, userstate) => {
  const commandObj = await buildCommandObj(args);
  await addCommand(channel, commandObj).then(() => {
    client.say(channel, `@${userstate.username}, successfully added command ${args[2].substring(1)}`);
  }).catch((err) => {
    logger.error(err);
  });
};

const remove = async ({channel, args}, userstate) => {
  await deleteCommand(channel, args[3].substring(1)).then(() => {
    client.say(channel, `@${userstate.username}, successfully deleted command ${args[2].substring(1)}`);
  }).catch((err) => {
    logger.error(err);
  });
};

const edit = async ({channel, args}, userstate) => {
  const commandObj = await buildCommandObj(args);
  await updateCommand(channel, commandObj).then(() => {
    client.say(channel, `@${userstate.username}, successfully updated command ${args[2].substring(1)}`);
  }).catch((err) => {
    logger.error(err);
  });
};

const show = async ({channel, args}, userstate) => {
  const showCommand = await isCommand(channel, args[2]);
  await client.say(channel, `@${userstate.username}, ${showCommand.message}`)
}

const executeBuiltInCommand = async ({channel, args}, userstate) => {
  switch (args[1]) {
    case "add":
      await add({channel, args}, userstate);
      break;
    case "remove":
      await remove({channel, args}, userstate);
      break;
    case "edit":
      await edit({channel, args}, userstate);
      break;
    case "show":
      await show({channel, args}, userstate);
      break;
  }
};

const command = async ({channel, args}, userstate) => {
  const canExecute = await isAuthorized(channel, userstate.badges, MOD_MODULES);
  if(canExecute) await executeBuiltInCommand({channel, args}, userstate);
};

const vanish = async ({channel}, {username}) => {
  const canExecute = isAuthorized(channel, username, USER_MODULES);
  if(canExecute) {
    client.timeout(channel, username, 1, "VANISH")
      .catch((err) => {
      logger.error(err);
    });
  }
};



module.exports = {
  accountage,
  settitle,
  setgame,
  followage,
  command,
  vanish,
};
