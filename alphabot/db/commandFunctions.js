const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');

const addCommand = async (usernameX, commandJSON) => {
  let query = {username:usernameX};
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

  //logger.info(newCommand); => undefined
  await User.findOne({ username:usernameX})
    .then(result => {
      if (result.commands.length===0) {
        console.log("es ist echt so")
        updateQuery = {
          username: result.username,
          commands: newCommand,
        };
      } else {
        result.commands.forEach(v => {
          if (v.command === newCommand.command) {
            goOn=false;
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
    if(goOn){
      await User.updateOne(query, updateQuery, (err) => {
        if (err) return logger.error(err);
        logger.info('Document inserted successfully');
      });
    }
    else{
      return logger.error('Command already exists!');
    }

};

const deleteCommand = async (usernameX, command) => {
  let isFound = false;
  const allCommands = [];
  await User.findOne({ username:usernameX })
    .then(result => {
      result.commands.forEach(v => {
        if (v.command !== command) {
          allCommands.push(v);
        }
        else{
          isFound=true;
        }
      });
    });
  const query = {  username:usernameX };
  const updateQuery = {
    username:usernameX,
    commands: allCommands,
  };
  if(isFound)
  {
    await User.updateOne(query, updateQuery, (err) => {
      if (err) return logger.error(err);
      logger.info('Command deleted successfully');
    });
  }
  else
  {
    return logger.error('Command was not found');
  }
};

const findAllCommands = async (usernameX) => {
  const commands = [];
  await User.findOne({  username:usernameX }, (err, res) => {
    if (err) return logger.error(err);
    res.commands.forEach(v => {
      commands.push(v);
    });
    if(commands.length===0)
    {
      logger.info("User has no commands");
    }
    else
    {
      logger.info("Found commands");
    }
    return commands;
  });
};

const updateCommand = async (usernameX, commandJSON) => {
  const updatedCommands = [];
  const query = {  username:usernameX };
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
  await User.findOne({  username:usernameX })
    .then(result => {
      result.commands.forEach(v => {
        if (v.command === commandJSON.command) {
          updatedCommands.push(newCommand);
          isFound = true;
        } else {
          updatedCommands.push(v);
        }
      });
      updatedQuery = {
        username:usernameX,
        commands: updatedCommands,
      };
    });
    if(isFound){
      await User.updateOne(query, updatedQuery, (err) => {
        if (err) logger.error(err);
        logger.info('Successfully updated command');
      });
    }
    else
    {
      return logger.error('Command was not found');
    }
};
module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
  updateCommand,
};
