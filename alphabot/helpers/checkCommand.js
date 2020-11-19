const {findAllCommands} = require('../db/commandFunctions');

const isCommand = async (channelOwner, message) => {
  // Gets all response from a channel
  const commands = await findAllCommands(channelOwner);
  if (!commands) {
    return;
  }

  // Runs through the Array and checks if the prefix + command equal the message
  // for example prefix = ! command = hey  and message === !hey
  //      --> it will return the command which then will be used to generate the expected output
  for (const command of commands) {
    if (command.aliases !== undefined && command.aliases.length > 0) {
      for (let j = 0; j < command.aliases.length; j++) {
        if ((command.prefix + command.aliases[j]) === message) {
          return (command);
        }
      }
    }

    if ((command.prefix + command.command) === message) {
      return (command);
    }
  }
};

module.exports = {
  isCommand
};
