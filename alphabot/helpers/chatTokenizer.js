const checkCommand = require('./checkCommand');

const tokenizer = async (channel, user, message) => {
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
