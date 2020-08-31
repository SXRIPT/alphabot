<<<<<<< Updated upstream
let tmi = require("tmi.js");
require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION,{useUnifiedTopology:true,useNewUrlParser:true});
var db = mongoose.connection;
const User = require("../mongodb/userModel");

let channel_names = [];

const findAllUsers = User.find({},function(err,result){
    result.forEach(v=>{
        channel_names.push(v.username);
    })
});


let options = {
    options: {
        debug: true
    },
    identity: {
        username: "pizzachaboy",
        password: "mrmdogmyamgswnympbliyak8we78qt"
    },
    channels: channel_names
};


let client = new tmi.client(options);
=======
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
  logger
};

const client = new tmi.client(options);
>>>>>>> Stashed changes

// Connect the client to the server..
client.connect().catch(logger.error);

<<<<<<< Updated upstream
let getClient = () => {
  return client;
};

module.exports = getClient();
=======
const getClient = () => client;

module.exports = getClient();
>>>>>>> Stashed changes
