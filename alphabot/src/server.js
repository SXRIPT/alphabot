require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const mongoose = require("mongoose");
const favicon = require('serve-favicon');
const path = require('path');
const logger = require('../config/logger');

const port = process.env.PORT || 8080;
require('./alphabot');

const app = express();

const URI = process.env.DB_CONNECTION;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', logger.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
    logger.info("Connected to Database.")
});


// rate limiter
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // limit each IP to 50 requests per windowMs
});

// routes
const session = require('../routes/session');
const commands = require('../routes/dashboardCommands');
const chat = require('../routes/chat');

// middleware
app.use(favicon(path.join(__dirname,'../public/images/favicon.ico')));
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(limiter); // all requests

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'alphabot' });
});

app.use('/session', session);
app.use('/commands', commands);
app.use('/chat', chat);

app.use((req, res) => {
  res.status(404).json({status: 404, message: `Unknown Request: ${req.originalUrl}`});
});

const server = app.listen(port, () =>
  logger.info(`Server started on port: ${port}`)
);

module.exports = server;
