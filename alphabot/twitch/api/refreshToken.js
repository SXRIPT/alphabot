const axios = require('axios');
const logger = require('../../config/logger');
const cache = require('../../middleware/cacheCommands');
require('dotenv').config();

const refreshAccessToken = async () => {
  const data = await cache.checkCache('REFRESH_TOKEN')
  const refreshToken = (data !== null) ? data : process.env.REFRESH_TOKEN;
  const URL = `https://id.twitch.tv/oauth2/token?grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`

  try {
    const response = await axios.post(URL);
    if(Object.entries(response).length > 0) {
      await cache.addToCachePersist('ACCESS_TOKEN', response.data.access_token);
      await cache.addToCachePersist('REFRESH_TOKEN', response.data.refresh_token);
    }
  } catch (e) {
    logger.error(e.response);
  }
};
module.exports = refreshAccessToken;
