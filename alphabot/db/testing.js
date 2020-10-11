const mongoose = require("mongoose");
const User = require("../models/User");
const Command = require("../models/Command");
const functions = require("../db/commandFunctions");
const commandFunctions = require("../chat/commands/commandTiming")
const URI = "mongodb+srv://admin:1adminAlphabot1@alphabotcluster0.u4ewc.mongodb.net/alphabot?retryWrites=true&w=majority";
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const commandJSON = {
    command:"test2",
    permission:"vip",
    cooldown:{
      globalCooldown:false,
      globalDuration:0,
      userDuration:10
    },
    message: "hellu"
}

const commandWith = {
    command:"nana",
    cooldown:{
      globalCooldown:true,
      globalDuration:20,
      userDuration:0
    }
}

const user = {
  username: "Bobs",
  age: "1"
}

const channel = {
  username: "Bob"
}

const channel2 = {
  username:"bobi"
}

const result = async () => {
  let x = await commandFunctions(commandJSON,channel,user);
  console.log("result1:" + x);
}
result();
const result2 = async () => {
  let y = await commandFunctions(commandWith,channel2,user);
  console.log("result2:" + y);
}
result2();