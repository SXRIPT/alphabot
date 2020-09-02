const mongoose = require('mongoose');

const commandSchema = mongoose.Schema({
  prefix: {
    type: String,
    default: '!',
  },
  command: {
    type: String,
    required: true,
  },
  parameters: {
    type: Array,
  },
  message: {
    type: String,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  permission: {
    type: String,
    enum: ['everyone', 'subscriber', 'vip', 'moderator', 'broadcaster'],
    required: true,
  },
  cooldown: {
    // time in seconds
    type: Number,
    default: 30,
  },
});

module.exports = mongoose.model('Commands', commandSchema, 'TwitchUsers'); // Todo: Collection name????
