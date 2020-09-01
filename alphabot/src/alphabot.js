const tmi = require('tmi.js');
const logger = require('../config/logger');
const { findAllUsers } = require('../db/sessionFunctions');

const channelNames = findAllUsers();
const options = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: 'pizzachaboy',
    password: 'mrmdogmyamgswnympbliyak8we78qt',
  },
  channels: channelNames,
  logger,
};

const client = new tmi.client(options);

// Connect the client to the server..
client.connect().catch(logger.error);

const getClient = () => client;

module.exports = getClient();
