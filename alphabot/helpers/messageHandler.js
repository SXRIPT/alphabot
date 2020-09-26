const client = require('../src/alphabot');
const chatTokenizer = require('../chat/commandHandler');
const logger = require('../config/logger');
const { addCommand } = require('../db/commandFunctions');
const { findAllCommands } = require('../db/commandFunctions');
const { findAllUsers } = require('../db/sessionFunctions');

client.on('message', async (channel, tag, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  // Handle different message types..
  switch (tag['message-type']) {
    case 'action':
      // This is an action message..
      break;
    case 'chat':
      // This is a chat message..
      const commands = await findAllCommands('scriptx');
      logger.info(`command: ${commands}`);
      // logger.info(findAllUsers());

      if (message.toLowerCase() === 'addomegalul') {
        await addCommand('scriptx', '');
      }
      // const chatToken = chatTokenizer.tokenizer();
      /* client.say(channel, `@${tag.username}, HEYYY!`)
        .then((data) => {
           logger.info(data);
        })
        .catch((err) => {
          logger.error(err);
        }); */
      break;
    case 'whisper':
      // This is a whisper..
      break;
    default:
      // Something else ?
      break;
  }
});
