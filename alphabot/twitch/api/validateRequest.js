const axios = require('axios');
const logger = require('../../config/logger');

const validate = async token => {
  const BASE_URL = 'https://id.twitch.tv/oauth2/validate';
  const accessToken = 'Bearer ' + token;

  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: accessToken
      }
    });
    if (Object.entries(response).length > 0) {
      return response.expires_in > 100;
    }

    return false;
  } catch (error) {
    logger.error('status: ' + error.response.status + ' message: ' + error.response.statusText);
    return false;
  }
};

module.exports = validate;
