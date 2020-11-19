const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isNumber, isFinite} = require('../../../utils/numbers');

const commercial = async (channel, [duration = 30, filler]) => {
  if (filler !== undefined || !isNumber(duration) && !isFinite(duration)) {
    return;
  }

  client.commercial(channel, duration)
    .then(data => {
      logger.info(channel + ' is now running an commercial for  ' + duration + ' seconds! | ' + data);
    }).catch(error => {
      logger.error(error);
    }
    );
};

module.exports = commercial;
