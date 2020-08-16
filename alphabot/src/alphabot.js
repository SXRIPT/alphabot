let tmi = require("tmi.js");

require('dotenv').config();
const{MongoClient} = require('mongodb');
var allMethods = require('../mongodb/addGetDelete');
const uri = process.env.DB_CONNECTION;
const clientMongo = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

let channel_names = [];
let client;

async function getChannelNames(){
    try
    {
        await clientMongo.connect();
    }catch(e){
        console.error(e);
    }
}

getChannelNames().then(async function(){
    try{channel_names = await allMethods.findAllUser(clientMongo,"TwitchUsers");
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

    console.log(options);
    
    client = new tmi.client(options);
    
    // Connect the client to the server..
    client.connect();
}
catch(e){
    console.error(e);
}
})


let getClient = () => {
  return client;
};

module.exports = getClient();