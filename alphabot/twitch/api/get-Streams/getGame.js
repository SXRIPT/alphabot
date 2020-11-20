const getStreams = require('./getStreams');

const getGame = async (channel) => {
  const response = await getStreams(channel);
  if(Object.entries(response.data.data).length !== 0) return response.data.data[0].game_name;
  return 'Streamer not live';
}

module.exports = getGame;
