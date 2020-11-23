const mongoose = require('mongoose');

const activeUserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 25,
  },
});

module.exports = mongoose.model('AUser', activeUserSchema, 'ActiveUser'); 
