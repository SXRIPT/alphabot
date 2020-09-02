const {findAllCommands} = require('../db/commandFunctions');

const isCommand = async (channelOwner, message) => {
  const commands = await findAllCommands(channelOwner);
  for (let i = 0; i < commands.length; i++) {
    if ((commands[i].prefix + commands[i].command) === message) {
      return commands[i];
    }
  }
  return undefined
};

module.exports = {
  isCommand,
};
