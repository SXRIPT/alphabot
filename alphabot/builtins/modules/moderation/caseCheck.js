const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');
const {isNumber, isFinite} = require('../../../utils/numbers');

const MODULE = 'caseCheck';
const DEFAULT_MAX_PERCENT = 70;

const caseCheck = async (channel, message, modules, username) => {
  const filteredModule = await filterModules(modules, MODULE);
  let upperCaseCount = 0;
  [...message].forEach(c => {
    if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
      upperCaseCount += 1;
    }
  });

  const percent = (upperCaseCount / message.length) * 100;
  let maxPercent;
  if(filteredModule.parameters.length > 0) {
    maxPercent = isNumber(filteredModule.parameters[0]) && isFinite(filteredModule.parameters[0]) ? Number(filteredModule.parameters[0]) : DEFAULT_MAX_PERCENT
  } else maxPercent = DEFAULT_MAX_PERCENT;

  if (percent > maxPercent) {
    await executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
    return true;
  }
  return false;
};

module.exports = caseCheck;
