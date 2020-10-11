require('dotenv').config();
const app = require('./app');
const logger = require('../config/logger');

const port = process.env.PORT || 8080;

require('./alphabot');
require('../chat/index');
require('../config/db');

const server = app.listen(port, () =>
  logger.info(`Server started on port: ${port}`)
);

module.exports = server;
