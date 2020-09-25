const checkCommand = require('./checkCommand');

const tokenizer = async (channel, user, message) => {
  /*
  *  checks if the chat message start with one of the allowed
  *  characters for a command later it will be checked if it
  *  is the right character for the command.
  */
  const regex = /^[`!@#$%^&_+\-=;:.<>?~]/;
  if(!regex.test(message.charAt(0))) return;

  const token = [];
  channel = channel.replace('#', '');
  token.push(channel, user, message);

  // Checks if the channel has the command
  const command = await checkCommand.isCommand(token[0], token[2]);
  if (!command) return;

  return command;
};

module.exports = {
  tokenizer,
};
