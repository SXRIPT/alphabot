const {findAllCommands} = require('../db/commandFunctions');

const isCommand = async (channelOwner, message) => {
  // gets all commands from a channel
  const commands = await findAllCommands(channelOwner);

  // runs through the Array and checks if the prefix + command equal the message
  // for example prefix = ! command = hey  and message === !hey
  //      --> it will return the command which then will be used to generate the expected output
  commands.forEach(command => {
    if((command.prefix + command.command)  === message) {
      return command;
    }
  });

  // message was not an command
  return undefined;
};

module.exports = {
  isCommand,
};
