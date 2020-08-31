const mongoose = require("mongoose");
const Commands = require("./Command")

const userSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
    min:4,
    max:25
  },
  commands : [Commands.schema]
});

module.exports = mongoose.model('User', userSchema, 'TwitchUsers'); // Todo: Collection name????
