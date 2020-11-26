const cache = require('../../middleware/cacheCommands');
const { findModule } = require('../../db/moduleFunctions');

const getModule = async (channel, moduleName) => {
  const cacheKey = `${channel}-modules`;

  let modules = await cache.checkCache(cacheKey);
  if (modules === null || !(modules.length > 0)) {
    modules = await findModule(channel, moduleName);
  } else {
    modules.forEach(m => {
      if (m.name === moduleName) modules = m;
    });
  }
  return modules;
};

module.exports = getModule
