const mongoose = require("mongoose");
<<<<<<< Updated upstream
const Commands = require("./Command")
=======
>>>>>>> Stashed changes

const userSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
    min:4,
    max:25
  },
<<<<<<< Updated upstream
  commands : [Commands.schema]
=======
  commands: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Command'
  }]
>>>>>>> Stashed changes
});

module.exports = mongoose.model('User', userSchema, 'TwitchUsers'); // Todo: Collection name????
