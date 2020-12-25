const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');

const MODULE = 'banphrase';

const banphrase = async (channel, message, modules, username) => {
    const filteredModule = await filterModules(modules, MODULE);
    if(filteredModule.parameters.includes(message)) {
      executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
      return true;
    }
    return false;
}

module.exports = banphrase;
