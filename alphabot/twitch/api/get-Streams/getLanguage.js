const getStreams = require('./getStreams');

const getLanguage = async (channel) => {
  const response = await getStreams(channel);
  if(Object.entries(response.data.data).length !== 0) return response.data.data[0].language;
  return 'Streamer not live';
}

module.exports = getLanguage;
