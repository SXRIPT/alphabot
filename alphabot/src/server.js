const app = require('./app');
const logger = require('../config/logger');

const port = process.env.PORT || 8080;
require('./alphabot');
<<<<<<< Updated upstream

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
app.use(volleyball);
app.use(limiter); // all requests

app.get('/', (req,res) => {
    res.status(200).send('maybe now?');
});

app.use('/session', session);
app.use('/commands', commands);
app.use('/chat', chat);

app.use((req, res) => {
    res.status(404).send('Unknown Request: ' + req.originalUrl);
});

=======
require('../helpers/messageHandler');
require('../config/db');
>>>>>>> Stashed changes


const server = app.listen(port, () =>
  logger.info(`Server started on port: ${port}`)
);

module.exports = server;
