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
    globalCooldown:{type:Boolean, default:false},
    globalDuration:{type:Number, default:0},
    userDuration:{type:Number,default:0}
  }
});

module.exports = mongoose.model('Commands', commandSchema, 'TwitchUsers');
