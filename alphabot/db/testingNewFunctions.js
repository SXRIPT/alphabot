require('dotenv').config();
const mongoose = require("mongoose");
const User = require("../models/User");
const Command = require("../models/Command");
const functions = require("../db/commandFunctions");


const URI = "mongodb+srv://admin:1adminAlphabot1@alphabotcluster0.u4ewc.mongodb.net/alphabot?retryWrites=true&w=majority";
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


//functions.findAllCommands("scriptx");

//functions.deleteCommand("adada","Hallo")
