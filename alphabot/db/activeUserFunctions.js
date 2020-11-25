const AUser = require('../models/AUser');
const logger = require('../config/logger');

const addUser = async (username) => {
  const user = new AUser({
    username,
  });

  const result = await AUser.findOne({username});
  if(!result){
    await user.save((err) => {
      if (err) return logger.error(err);
      logger.info('Document inserted successfully');
    });
  } else {
    logger.error('Document already exists');
  }
};

const deleteUser = async (username) => {
  const query = { username };

  await AUser.deleteOne(query, (err) => {
    if (err) return logger.error(err);
    logger.info('Deleted successfully');
  });
};

const findAllUsers = /* async */ () => {
  const channelNames = [];

  /* await */ AUser.find({}, (err, res) => {
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
