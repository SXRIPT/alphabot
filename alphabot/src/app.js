const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
require('../middleware/passport');

const app = express();

// Rate limiter
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50 // Limit each IP to 50 requests per windowMs
});

// Routes
const session = require('../routes/session');
const moderation = require('../routes/dashboard/moderation');
const commands = require('../routes/dashboard/commands');
const auth = require('../routes/auth');

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(limiter); // All requests

app.get('/', (request, res) => {
  res.status(200).json({status: 200, message: 'alphabot'});
});

// Passport.authenticate('jwt', { session : false }) --> middleware to only allow people with a token
app.use('/session', session);
app.use('/response/moderation', moderation);
app.use('/response/custom', commands);
app.use('/user', auth);

app.use((request, res) => {
  res.status(404).json({status: 404, message: `Unknown Request: ${request.method} ${request.originalUrl}`});
});

module.exports = app;
