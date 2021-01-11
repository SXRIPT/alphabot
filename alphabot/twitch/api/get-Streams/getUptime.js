const getStreams = require('./getStreams');

const buildDateString = (date) => {
  let seconds = Math.floor(date/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);

  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

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
    return buildDateString(diffDate);
  }
  return 'Streamer not live';
}

module.exports = getUptime;
