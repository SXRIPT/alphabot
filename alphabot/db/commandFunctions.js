const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');
const { addToCache, checkCache, setExpire } = require('../middleware/cacheCommands');

const addCommand = async (user, commandJSON) => {
  const query = { username: user };
  let updateQuery;
  let goOn = true;
  const allCommands = [];

  const newCommand = new Command({
    prefix: commandJSON.prefix,
    command: commandJSON.command,
    parameters: commandJSON.parameters,
    message: commandJSON.message,
    enabled: commandJSON.enabled,
    permission: commandJSON.permission,
    cooldown: commandJSON.cooldown,
  });

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
          allCommands.push(v);
        });
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
    return logger.error('Command already exists!');
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
      if (err) return logger.error(err);
      setExpire(user, 5);
      logger.info('Command deleted successfully');
    });
  } else {
    return logger.error('Command was not found');
  }
};

const findAllCommands = async (user) => {
  const commands = [];
  const cache = await checkCache(user);
  if (cache) {
    logger.info('Existing CACHE found!');
    return cache;
  }
  await User.findOne({ username: user }, (err, res) => {
    if (err) return logger.error('ERROR: ' + err);
    res.commands.forEach((v) => {
      commands.push(v);
    });
    if (commands.length === 0) {
      logger.info('User has no commands');
    } else {
      logger.info('Found commands');
    }
  })
  
  await addToCache(user, JSON.stringify(commands));
  return await commands;
};

const updateCommand = async (user, commandJSON) => {
  const updatedCommands = [];
  const query = { username: user };
  let updatedQuery;
  let isFound = false;
  const newCommand = new Command({
    prefix: commandJSON.prefix,
    command: commandJSON.command,
    parameters: commandJSON.parameters,
    message: commandJSON.message,
    enabled: commandJSON.enabled,
    permission: commandJSON.permission,
    cooldown: commandJSON.cooldown,
  });
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
      if (err) logger.error(err);
      logger.info('Successfully updated command');
      setExpire(user, 5);
    });
  } else {
    return logger.error('Command was not found');
  }
};
module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
  updateCommand,
};
