const User = require('../models/User');
const logger = require('../config/logger');

const addUser = async (username) => {
  const user = new User({
    username,
  });

  const result = User.findOne({username:username});

  if(result.username!==username){
    await user.save((err) => {
      if (err) return logger.error(err);
      logger.info('Document inserted successfully');
    });
  }
  else {
      logger.error('Document already exists');
    }
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
