const checkCommand = require('./checkCommand');

const tokenizer = async (channel, user, message) => {
  /*
  *  checks if the chat message start with one of the allowed
  *  characters for a command later it will be checked if it
  *  is the right character for the command.
  */
  const regex = /[`!@#$%^&_+\-=;:.<>?~]/;
  if(!regex.test(message.charAt(0))) return;

  const token = [];
  channel = channel.replace('#', '');
  token.push(channel, user, message);

  const command = await checkCommand.isCommand(token[0], token[2]);
  if (!command) return;


  return command;
};

// creates a object from the message array
const createObject = async (array) => {
  const channel = array[0];
  const user = array[1];
  const command = array[2];
  const args = array.slice(3);
  return {
    channel,
    user,
    command,
    args,
  };
};

module.exports = {
  tokenizer,
};
