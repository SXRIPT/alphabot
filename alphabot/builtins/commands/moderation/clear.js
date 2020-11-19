const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');

const clear = async channel => {
  client.clear(channel)
    .then(data => {
      logger.info('Chat from ' + channel + ' has been cleared! ' + data);
    }).catch(error => {
      logger.error(error);
    }
    );
};

module.exports = clear;
