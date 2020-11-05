const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
require('../middleware/passport');

const app = express();

// rate limiter
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // limit each IP to 50 requests per windowMs
});

// routes
const session = require('../routes/session');
const moderation = require('../routes/dashboard/moderation');
const commands = require('../routes/dashboard/commands');
const auth = require('../routes/auth');

// middleware
app.use(express.static(path.join(__dirname, '../public')));
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

// passport.authenticate('jwt', { session : false }) --> middleware to only allow people with a token
app.use('/session', session);
app.use('/response/moderation', moderation);
app.use('/response/custom', commands);
app.use('/user', auth);

app.use((req, res) => {
  res.status(404).json({status: 404, message: `Unknown Request: ${req.method} ${req.originalUrl}`});
});

module.exports = app;
