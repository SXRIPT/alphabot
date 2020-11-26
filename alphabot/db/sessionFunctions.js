const User = require('../models/User');
const logger = require('../config/logger');
const Module = require('../models/Module');
const Command = require('../models/Command');

const modules = [
  new Module({
    name: "ascii",
  }),
  new Module({
    name: "banphrase",
  }),
  new Module({
    name: "link",
  }),
  new Module({
    name: "message",
  }),
  new Module({
    name: "case",
  }),
];

const commands = [
  new Command({
    command: 'followage',
    aliases: ['howlong'],
    message: '${username} has been following --streamer-- for 1 year 5 months 27 days 1 hour',
    isDefault: true,
    cooldown: {globalCooldown: true, globalDuration: 5, userDuration: 15},
  })
]

//Space for default commands

const addUser = async (username) => {
  const user = new User({
    username,
    modules,
    commands
  });

  const result = await User.findOne({username});
  if(!result){
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
