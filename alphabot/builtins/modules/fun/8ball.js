const axios = require('axios');
const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const fetchEightballAPI = async (message) => {
  const BASE_URL = 'https://8ball.delegator.com/magic/JSON/';
  try {
    const response = await axios.get(BASE_URL + message);
    return response.magic.answer;
  } catch (e) {
    logger.error(e);
  }
};

const eightball = async ({ channel, args }) => {
  const message = await fetchEightballAPI(args.slice(2).join(' '));
  await client.say(channel, message)
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = eightball;
