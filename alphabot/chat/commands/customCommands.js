const { setExpire } = require('../../middleware/cacheCommands');
const commandFunctions = require('../../db/commandFunctions');

const addCommand  = async (channel, user, command) => {
  await commandFunctions.addCommand(channel, command);
  await setExpire(channel, 0);
}

const editCommand  = async (channel, user, command) => {
  await commandFunctions.updateCommand(channel, command);
  await setExpire(channel, 0);
}


// Deletes a command from a channel and sets the cache timeout
// for the key which is the channel.
const deleteCommand = async (channel, user, command) => {
  await commandFunctions.deleteCommand(channel, command);
  await setExpire(channel,0);
}
