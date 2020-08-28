const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
    min:4,
    max:25
  }
});

module.exports = mongoose.model('User',UserSchema,"TwitchUsers"); // Todo: Collection name????
