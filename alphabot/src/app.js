const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
require('./alphabot');

const app = express();

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
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter); // all requests

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'alphabot' });
});

app.use('/session', session);
app.use('/commands', commands);
app.use('/chat', chat);

app.use((req, res) => {
  res.status(404).json({status: 404, message: `Unknown Request: ${req.method} ${req.originalUrl}`});
});

module.exports = app;
