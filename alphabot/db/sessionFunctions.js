const User = require('../models/User');
const logger = require('../config/logger');

const addUser = async (username) => {
  const user = new User({
    username,
  });

  await user.save((err) => {
    if (err) return logger.error(err);
    logger.info('Document inserted successfully');
  });
};

const deleteUser = async (username) => {
  const query = { username };

  await User.deleteOne(query, (err) => {
    if (err) return logger.error(err);
    logger.info('Deleted successfully');
  });
};

// TODO: make async
const findAllUsers = /* async */ () => {
  const channelNames = [];

  /* await */ User.find({}, (err, res) => {
    res.forEach((user) => {
      channelNames.push(user.username);
    });
  });

  return channelNames;
};

module.exports = {
  addUser,
  deleteUser,
  findAllUsers,
};
