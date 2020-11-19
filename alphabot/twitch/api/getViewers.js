const axios = require('axios');
const logger = require('../../config/logger');
const validate = require('./validateRequest');
const refreshToken = require('./refreshToken');
const cache = require('../../middleware/cacheCommands');

const getViewers = async channel => {
  const URL = `https://api.twitch.tv/helix/streams?user_login=${channel.toLowerCase()}`;
  let data = await cache.checkCache('ACCESS_TOKEN');
  let accessToken = (data !== null) ? data : process.env.ACCESS_TOKEN;
  const isValid = await validate(accessToken);
  if (!isValid) {
    await refreshToken();
    data = await cache.checkCache('ACCESS_TOKEN');
    accessToken = (data !== null) ? data : process.env.ACCESS_TOKEN;
  }

  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Client-Id': process.env.CLIENT_ID
      }
    });
    if (Object.entries(response.data.data).length > 0) {
      return response.data.data[0].viewer_count;
    }

    return 'Streamer not live';
  } catch (error) {
    logger.error(error.response);
  }
};

module.exports = getViewers;
