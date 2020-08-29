const client = require('../src/alphabot');
const chatTokenizer = require('./chatTokenizer');
const logger = require('../config/logger');

client.on('message', (channel, tag, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  // Handle different message types..
  switch (tag['message-type']) {
    case 'action':
      // This is an action message..
      break;
    case 'chat':
      // This is a chat message..
      // const chatToken = chatTokenizer.tokenizer();
      /*client.say(channel, `@${tag.username}, HEYYY!`)
        .then((data) => {
           logger.info(data);
        })
        .catch((err) => {
          logger.error(err);
        });*/
      break;
    case 'whisper':
      // This is a whisper..
      break;
    default:
      // Something else ?
      break;
  }
});
