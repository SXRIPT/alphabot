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

// Connect the client to the server..
client.connect();

let getClient = () => {
  return client;
};

module.exports = getClient();