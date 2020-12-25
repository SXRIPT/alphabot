const mongoose = require('mongoose');
const Command = require('./Command');
const Module = require('./Module');
const Linktree = require('./Linktree');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 25,
  },
  commands: [Command.schema],
  modules: [Module.schema],
  links: [Linktree.schema],
});

module.exports = mongoose.model('User', userSchema, 'TwitchUsers');
