const { setExpire } = require('../../middleware/cacheCommands');

const addCommand  = async (channel, user, message) => {
  await setExpire(channel, 0);

}

const editCommand  = async (channel, user, message) => {
  await setExpire(channel, 0);

}
