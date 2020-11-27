const { Error } = require('mongoose');
const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');
const { addToCache, checkCache, setExpire } = require('../middleware/cacheCommands');

const buildCommand = async (commandJSON) => {
  return new Command({
    prefix: commandJSON.prefix,
    command: commandJSON.command,
    aliases: commandJSON.aliases,
    parameters: commandJSON.parameters,
    message: commandJSON.message,
    response: commandJSON.response,
    commandMedium: commandJSON.commandMedium,
    enabled: commandJSON.enabled,
    isDefault: commandJSON.isDefault,
    permission: commandJSON.permission,
    cooldown: commandJSON.cooldown,
  });
};

const addCommand = async (user, commandJSON) => {
  const query = { username: user };
  let updateQuery;
  let goOn = true;
  let allCommands = [];
  const newCommand = await buildCommand(commandJSON);
  // logger.info(newCommand); => undefined
  await User.findOne({ username: user })
    .then((result) => {
      if (result.commands.length === 0) {
        updateQuery = {
          username: result.username,
          commands: newCommand,
        };
      } else {
        result.commands.forEach((v) => {
          if (v.command === newCommand.command) {
            goOn = false;
          }
        });
        allCommands = result.commands;
        allCommands.push(newCommand);
        updateQuery = {
          username: result.username,
          commands: allCommands,
        };
      }
    });
  if (goOn) {
    await User.updateOne(query, updateQuery, (err) => {
      if (err) return logger.error(err);
      setExpire(user, 5);
      logger.info('Document inserted successfully');
    });
  } else {
    logger.error('Command already exists!');
    throw new Error('Command already exists!');
  }
};

const deleteCommand = async (user, command) => {
  let isFound = false;
  const allCommands = [];
  await User.findOne({ username: user })
    .then((result) => {
      result.commands.forEach((v) => {
        if (v.command !== command) {
          allCommands.push(v);
        } else {
          isFound = true;
        }
      });
    });
  const query = { username: user };
  const updateQuery = {
    username: user,
    commands: allCommands,
  };
  if (isFound) {
    await User.updateOne(query, updateQuery, (err) => {

      if (err) {
        logger.error(err);
        throw new Error(err);
      }
      setExpire(user, 5);
      logger.info('Command deleted successfully');
    });
  } else {
    logger.error('Command was not found');
    throw new Error('Command was not found');
  }
};

const findAllCommands = async (user) => {
  let commands = [];
  const cache = await checkCache(user);
  if (cache) {
    logger.info('Existing CACHE found!');
    return cache;
  }
  await User.findOne({ username: user }, (err, res) => {
    if (err) {
      logger.error('ERROR: ' + err);
      throw new Error(err);
    }
    commands = res.commands;
  });

  if(commands.length>0)
    await addToCache(user, JSON.stringify(commands));
  return commands;
};

const updateCommand = async (user, commandJSON) => {
  const updatedCommands = [];
  const query = { username: user };
  let updatedQuery;
  let isFound = false;
  const newCommand = await buildCommand(commandJSON);
  await User.findOne({ username: user })
    .then((result) => {
      result.commands.forEach((v) => {
        if (v.command === commandJSON.command) {
          updatedCommands.push(newCommand);
          isFound = true;
        } else {
          updatedCommands.push(v);
        }
      });
      updatedQuery = {
        username: user,
        commands: updatedCommands,
      };
    });
  if (isFound) {
    await User.updateOne(query, updatedQuery, (err) => {
      if (err) {
        logger.error(err);
        throw new Error(err);
      }
      logger.info('Successfully updated command');
      setExpire(user, 5);
    });
  } else {
    logger.error('Command was not found');
    throw new Error('Command was not found');
  }
};
module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
  updateCommand,
};
