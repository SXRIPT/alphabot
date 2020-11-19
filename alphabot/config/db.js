require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('./logger');

const URI = process.env.DB_CONNECTION;
mongoose.set('useCreateIndex', true);
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(data => {
    logger.info('Successfully connected to DB ' + data);
  })
  .catch(error => {
    logger.error(error);
  });

const db = mongoose.connection.once('open', () => {
  logger.info('Connected to Database.');
});

// Bind connection to error event (to get notification of connection errors)
db.on('error', err => logger.error('MongoDB connection error: ', err));

module.exports = db;
