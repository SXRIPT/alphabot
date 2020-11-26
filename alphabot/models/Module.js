const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  penalty: {
    type: String,
    enum: ['ban','timeout'],
    default: 'timeout',
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  timeoutDuration:{
      type: Number,
      default:600,
  },
  parameters:{
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Modules', moduleSchema, 'TwitchUsers');
