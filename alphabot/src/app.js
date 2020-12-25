const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
const { rateLimiterMiddleware } = require('../middleware/rateLimiter');
// const passport = require('passport');
require('../middleware/passport');

const app = express();


// routes
const session = require('../routes/session');
const moderation = require('../routes/dashboard/moderation');
const commands = require('../routes/dashboard/commands');
const modCommands = require('../routes/dashboard/moderationCommands');
const auth = require('../routes/auth');


// middleware
app.enable("trust proxy");
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(rateLimiterMiddleware);
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'alphabot' });
});


// passport.authenticate('jwt', { session : false }) --> middleware to only allow people with a token
//   only have to enable passport already setup
//   (signup then login when logging in you will get a jwt token which you have to provide as a query param named secret_token

app.use('/session', session);
app.use('/response/moderation', moderation);
app.use('/response/custom', commands);
app.use('/user', auth);
app.use('/modCommands', modCommands);

app.use((req, res) => {
  res.status(404).json({status: 404, message: `Unknown Request: ${req.method} ${req.originalUrl}`});
});

module.exports = app;
