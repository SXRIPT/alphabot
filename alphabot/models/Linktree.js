const mongoose = require('mongoose');

const linktreeSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Linktree', linktreeSchema, 'TwitchUsers');
