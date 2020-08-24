const tmi = require('tmi.js');

const channelNames = ['#scriptx', '#botalpha']; // get all from database
const options = {
  options: {
    debug: true,
  },
  identity: {
    username: 'pizzachaboy',
    password: 'mrmdogmyamgswnympbliyak8we78qt',
  },
  channels: channelNames,
};

const client = new tmi.client(options);

// Connect the client to the server..
client.connect().catch(console.error);

const getClient = () => client;

module.exports = getClient();
