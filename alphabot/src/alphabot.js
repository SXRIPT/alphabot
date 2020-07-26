let tmi = require("tmi.js");

let channel_names = ["#scriptx", "#botalpha"]; // get all from database
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

let getClient = async () => {
  return client;
};

module.exports = getClient();