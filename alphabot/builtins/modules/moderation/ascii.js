const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');

const MODULE = 'ascii';

const ascii = async (channel, message, modules, username) => {
  const filteredModule = await filterModules(modules, MODULE);
  const hasNonAscii = [...message].some(char => char.charCodeAt(0) > 255)
  if(hasNonAscii) {
    executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
    return true;
  }
  return false;
}

module.exports = ascii;
