const cache = require('../../middleware/cacheCommands');
const { findModule, updateModule } = require('../../db/moduleFunctions');

const MODULE = 'banphrase';

const getModule = async (channel) => {
  const cacheKey = `${channel}-modules`;

  const modules = await cache.checkCache(cacheKey);
  let banphrase;
  if (modules === null) {
    banphrase = await findModule(channel, MODULE);
  } else {
    modules.forEach(m => {
      if (m.name === MODULE) banphrase = m;
    });
  }
  return banphrase;
};

const add = async ({ channel, args }, userstate) => {
  const message = args.slice(2).join(' ');

  if (message !== '') {
    let banphrases = await getModule(channel);
    if (!banphrases.parameters.includes(message)) {
      banphrases.parameters.push(message);
      await updateModule(channel, banphrases);
    }
  }
};

const remove = async ({ channel, args }, userstate) => {
  const message = args.slice(2).join(' ');

  if (message !== '') {
    let banphrases = await getModule(channel);
    console.log(banphrases);
    const index = banphrases.parameters.indexOf(message);
    if (index !== -1) {
      banphrases.parameters.splice(index, 1);
      await updateModule(channel, banphrases);
      console.log(banphrases)
    }
  }
};


module.exports = {
  add,
  remove,
};
