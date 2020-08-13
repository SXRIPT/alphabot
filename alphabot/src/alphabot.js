let tmi = require("tmi.js");

//added by yigi
require('dotenv').config(); //creds
const{MongoClient} = require('mongodb');
var allMethods = require('../mongodb/addGetDelete');
const uri = process.env.DB_CONNECTION;
const clientMongo = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

let channel_names;

async function getChannelNames(){
    try
    {
        await clientMongo.connect();
        channel_names = await allMethods.findAllUser(clientMongo,"TwitchUsers"); //Todo collection name
    }catch(e){
        console.error(e);
    }finally{
        clientMongo.close();
    }
}

getChannelNames();
console.log(channel_names);

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