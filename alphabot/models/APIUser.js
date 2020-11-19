const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const apiSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 255,
    unique: true
  },

  password: {
    type: String,
    required: true,
    max: 1024,
    min: 8
  }
});

apiSchema.pre('save', async function (next) {
  // This --> current document too be saved
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

apiSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const isValid = await bcrypt.compare(password, user.password);
  return isValid;
};

module.exports = mongoose.model('APIUser', apiSchema);
