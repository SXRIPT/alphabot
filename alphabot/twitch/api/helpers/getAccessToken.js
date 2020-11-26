const validate = require("./validateRequest");
const refreshToken = require("./refreshToken");
const cache = require('../../../middleware/cacheCommands');

const getAccessToken = async () => {
  let data = await cache.checkCache('ACCESS_TOKEN')
  let accessToken = (data !== null) ? data : process.env.ACCESS_TOKEN;
  const isValid = await validate(accessToken)
  if(!isValid) {
    await refreshToken();
    data = await cache.checkCache('ACCESS_TOKEN')
    accessToken = (data !== null) ? data : process.env.ACCESS_TOKEN;
  }
  return accessToken
}

module.exports = getAccessToken;
