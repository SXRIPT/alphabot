const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
    min:4,
    max:25
  },
  commands: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Command'
  }]
});

module.exports = mongoose.model('User', userSchema, 'TwitchUsers'); // Todo: Collection name????
