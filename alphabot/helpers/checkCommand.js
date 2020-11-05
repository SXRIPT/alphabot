const {findAllCommands} = require('../db/commandFunctions');

const isCommand = async (channelOwner, message) => {
  // gets all response from a channel
  const commands = await findAllCommands(channelOwner);
  if(!commands) return;
  // runs through the Array and checks if the prefix + command equal the message
  // for example prefix = ! command = hey  and message === !hey
  //      --> it will return the command which then will be used to generate the expected output
  for (let i = 0; i < commands.length; i++) {
    if(commands[i].aliases !== undefined && commands[i].aliases.length > 0) {
      for(let j = 0; j < commands[i].aliases.length; j++) {
        if ((commands[i].prefix + commands[i].aliases[j]) === message) return (commands[i]);
      }
    }

    if ((commands[i].prefix + commands[i].command) === message) {
      return (commands[i]);
    }
  }
};

module.exports = {
  isCommand,
};
