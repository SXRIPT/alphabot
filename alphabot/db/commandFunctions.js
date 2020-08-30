const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');

const addCommand = async (username, commandJSON) => {
  const user = await User.findOne({ username: username });

  const message = "Your custom message";

  const command = new Command({
    command: message,
    enabled: true,
    permission: 'everyone'
  });
  user.command = command;
  await user.save((err) => {
    if (err) return logger.error(err);
    logger.info('Document inserted successfully');
  });
};

const deleteCommand = async () => {

};

const findAllCommands = async () => {
  const commands = [];
  await User.find({}, (err, res) => {
    res.forEach(user => {
      commands.push(user.command);
    });
  });

  return commands;
};

module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
};
