let checkCommand = require('./checkCommand');

let tokenizer = async (message) => {
    let token = message.split(' ');
    token = token.slice(2);

    /*
    Checks if user message start with the ! prefix
    TODO: for custom prefix would need to get streamers settings from db
    then use streamers prefix and check if starts with it
    */
    if (!token[2].startsWith('!')) { return; }

    token[0] =  token[0].replace(/[^#\w\s]/g, '');
    token[1] = token[1].replace(/[^\w\s]/g, '');
    // TODO: build in check if token[2] is a command (need db help)
    if(!await checkCommand.isCommand(token[0], token[2])) { return; }

    return createObject(token).then(obj => { return obj });
};

// creates a object from the message array
let createObject = async (array) => {
  let channel = array[0];
  let user = array[1];
  let command = array[2];
  let args = array.slice(3);
  return {
      channel,
      user,
      command,
      args
    };
};

module.exports = {
    tokenizer
}