/*
 This requests the GET https://api.twitch.tv/helix/streams Endpoint
 The returned data is then used in other methods to extract the Viewers/Game/Title etc.
 */
const axios = require('axios');
const logger = require('../../../config/logger');
const getAccessToken = require('../helpers/getAccessToken');

const getStreams = async (channel) => {
  const URL = `https://api.twitch.tv/helix/streams?user_login=${channel.toLowerCase()}`;
  const accessToken = await getAccessToken();

  try {
     return await axios.get(URL, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Client-Id': process.env.CLIENT_ID
      }
    });
    // if(Object.entries(response.data.data).length !== 0) return response.data.data[0];
    // return 'Streamer not live';

  } catch (e) {
    logger.error(e.response);
  }
}

module.exports = getStreams;
