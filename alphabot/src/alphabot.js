const tmi = require('tmi.js');
const logger = require('../config/logger');
const { findAllUsers } = require('../db/activeUserFunctions');

const channelNames = findAllUsers();
const options = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: process.env.username,
    password: process.env.password,
  },
  channels: channelNames,
  logger,
};

const client = new tmi.client(options);

// Connect the client to the server..
client.connect().catch(logger.error);

const getClient = () => client;

module.exports = getClient();
