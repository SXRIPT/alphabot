const getStreams = require('./getStreams');

const buildDateString = async (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if(hours === 0) {
    if(minutes === 0) {
      return `${seconds} seconds`;
    }
    return `${minutes} minutes`;
  }
  return `${hours} hours ${minutes} minutes`;
};

const getUptime = async (channel) => {
  const response = await getStreams(channel);
  if(Object.entries(response.data.data).length !== 0) {
    const start = new Date(response.data.data[0].started_at);
    const diffDate = new Date(start - new Date());
    const time = await buildDateString(diffDate);
    return time;
  }
  return 'Streamer not live';
}

module.exports = getUptime;
