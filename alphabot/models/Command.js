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
  aliases: {
    type: Array,
  },
  parameters: {
    type: Array,
  },
  message: {
    type: String,
  },
  response: {
    type: String,
    enum: ['chat', 'whisper'],
    default: 'chat',
  },
  commandMedium: {
    type: String,
    enum: ['offline', 'online', 'both'],
    default: 'both',
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  permission: {
    type: String,
    enum: ['everyone', 'subscriber', 'vip', 'moderator', 'broadcaster'],
    default: 'everyone',
  },
  cooldown: {
    globalCooldown:{type:Boolean, default:false},
    globalDuration:{type:Number, default:0},
    userDuration:{type:Number,default:0},
  }
});

module.exports = mongoose.model('Commands', commandSchema, 'TwitchUsers');
