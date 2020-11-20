const getStreams = require('./getStreams');

const getTitle = async (channel) => {
  const response = await getStreams(channel);
  if(Object.entries(response.data.data).length !== 0) return response.data.data[0].title;
  return 'Streamer not live';
}

module.exports = getTitle;
