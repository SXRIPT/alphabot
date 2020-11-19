const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const axios = require('axios');

const eightball = async ({channel, args}, userstate) => {
  if(isEnabled) {
    const message = await fetchEightballAPI(args.slice(2).join(' '));
    await client.say(channel, message)
      .catch((err) => {
      logger.error(err);
    });
  }
}

const fetchEightballAPI = async (message) => {
  const BASE_URL = 'https://8ball.delegator.com/magic/JSON/';
  try {
    const response = await axios.get(BASE_URL + message);
    return response['magic']['answer'];
  } catch (e) {
    logger.error(e);
  }
}
module.exports = eightball;
