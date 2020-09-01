const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');

const addCommand = async (username, commandJSON) => {
  let query;
  let updateQuery;
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

  logger.info(newCommand);
  await User.findOne({ username })
    .then(result => {
      if (result.commands === []) {
        updateQuery = {
          username: result.username,
          commands: newCommand,
        };
      } else {
        result.commands.forEach(v => {
          if (v.command === newCommand.command) {
            return logger.error('Command already exists!');
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
  await User.updateOne(query, updateQuery, (err) => {
    if (err) return logger.error(err);
    logger.info('Document inserted successfully');
  });
};

const deleteCommand = async (username, command) => {
  const allCommands = [];
  await User.findOne({ username })
    .then(result => {
      result.commands.forEach(v => {
        if (v.command !== command) {
          allCommands.push(v);
        }
      });
    });
  const query = { username };
  const updateQuery = {
    username,
    commands: allCommands,
  };
  await User.updateOne(query, updateQuery, (err) => {
    if (err) return logger.error(err);
    logger.info('Command deleted successfully');
  });
};

const findAllCommands = async (username) => {
  const commands = [];
  await User.findOne({ username }, (err, res) => {
    if (err) return logger.error(err);
    res.commands.forEach(v => {
      commands.push(v);
    });
  });
  return commands;
};

const updateCommand = async (username, commandJSON) => {
  const updatedCommands = [];
  const query = { username };
  let updatedQuery;
  const newCommand = new Command({
    prefix: commandJSON.prefix,
    command: commandJSON.command,
    parameters: commandJSON.parameters,
    message: commandJSON.message,
    enabled: commandJSON.enabled,
    permission: commandJSON.permission,
    cooldown: commandJSON.cooldown,
  });
  await User.findOne({ username })
    .then(result => {
      result.commands.forEach(v => {
        if (v.command === commandJSON.command) {
          updatedCommands.push(newCommand);
        } else {
          updatedCommands.push(v);
        }
      });
      updatedQuery = {
        username,
        commands: updatedCommands,
      };
    });
  await User.updateOne(query, updatedQuery, (err) => {
    if (err) logger.error(err);
    logger.info('Successfully updated command');
  });
};
module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
  updateCommand,
};
