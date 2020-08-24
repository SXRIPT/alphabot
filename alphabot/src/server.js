const express = require('express');
const app = express();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const port = process.env.PORT || 8080;
require('./alphabot');

// rate limiter
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 50 // limit each IP to 50 requests per windowMs
});

// routes
const session = require('../routes/session');
const commands = require('../routes/dashboardCommands');
const chat = require('../routes/chat');

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(limiter); // all requests

app.get('/', (req,res) => {
    res.status(200).json({status: 200, message: 'alphabot'});
});

app.use('/session', session);
app.use('/commands', commands);
app.use('/chat', chat);

app.use((req, res) => {
    res.status(404).send('Unknown Request: ' + req.originalUrl);
});



const server = app.listen(port, () => console.log('Server started on port: ' + port));

module.exports = server;