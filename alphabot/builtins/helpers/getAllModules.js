const cache = require('../../middleware/cacheCommands');
const { findAllModules } = require('../../db/moduleFunctions');

const getAllModules = async (channel) => {
  const cacheKey = `${channel}-modules`;

  let modules = await cache.checkCache(cacheKey);
  if (modules === null) {
    modules = await findAllModules(channel);
  }
  return modules;
};

module.exports = getAllModules
