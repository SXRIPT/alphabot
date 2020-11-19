const axios = require('axios');
const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const eightball = async ({channel, args}, userstate) => {
  if (isEnabled) {
    const message = await fetchEightballAPI(args.slice(2).join(' '));
    await client.say(channel, message)
      .catch(error => {
        logger.error(error);
      });
  }
};

const fetchEightballAPI = async message => {
  const BASE_URL = 'https://8ball.delegator.com/magic/JSON/';
  try {
    const response = await axios.get(BASE_URL + message);
    return response.magic.answer;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = eightball;
