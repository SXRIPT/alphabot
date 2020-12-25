const filterModules = require('../../helpers/filterModules');
const executePenalty = require('../../helpers/executePenalty');
const {isNumber, isFinite} = require('../../../utils/numbers');

const MODULE = 'message';
const DEFAULT_MAX_MESSAGE_LENGTH = 60;

const message = async (channel, msg, modules, username) => {
  const filteredModule = await filterModules(modules, MODULE);
  let maxMsgLength
  if(filteredModule.parameters.length > 0) {
    maxMsgLength = isNumber(filteredModule.parameters[0]) && isFinite(filteredModule.parameters[0]) ? Number(filteredModule.parameters[0]) : DEFAULT_MAX_MESSAGE_LENGTH
  } else maxMsgLength = DEFAULT_MAX_MESSAGE_LENGTH;
  if(msg.length > maxMsgLength) {
    executePenalty(channel, username, filteredModule.penalty, filteredModule.timeoutDuration, MODULE);
    return true;
  }
  return false;
}

module.exports = message;
