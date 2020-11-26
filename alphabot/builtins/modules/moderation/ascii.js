const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');

const MODULE = 'ascii';

const ascii = async (channel, message, modules, username) => {
  let filteredModule = await filterModules(modules, MODULE);
  let hasNonAscii = [...message].some(char => char.charCodeAt(0) > 127)
  if(hasNonAscii) {
    await executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
    return true;
  }
  return false;
}

module.exports = ascii;
