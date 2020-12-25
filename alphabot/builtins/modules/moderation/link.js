const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');

const MODULE = 'link';
const strRegex = "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?";
const re=new RegExp(strRegex);

const link = async (channel, message, modules, username) => {
  const filteredModule = await filterModules(modules, MODULE);
  if(re.test(message)) {
    executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
    return true;
  }
  return false;
}

module.exports = link;



