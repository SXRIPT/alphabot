const getStreams = require('./getStreams');

const getViewers = async (channel) => {
  const response = await getStreams(channel);
  if(Object.entries(response.data.data).length !== 0) return response.data.data[0].viewer_count;
  return 'Streamer not live';
}

module.exports = getViewers;
