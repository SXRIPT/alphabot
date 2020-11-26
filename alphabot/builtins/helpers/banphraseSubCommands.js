const { updateModule } = require('../../db/moduleFunctions');
const getModule = require("./getModule");

const MODULE = 'banphrase';

const add = async ({ channel, args }) => {
  const message = args.slice(2).join(' ');

  if (message !== '') {
    const banphrases = await getModule(channel, MODULE);
    if (!banphrases.parameters.includes(message)) {
      banphrases.parameters.push(message);
      await updateModule(channel, banphrases);
    }
  }
};

const remove = async ({ channel, args }) => {
  const message = args.slice(2).join(' ');

  if (message !== '') {
    const banphrases = await getModule(channel, MODULE);
    const index = banphrases.parameters.indexOf(message);
    if (index !== -1) {
      banphrases.parameters.splice(index, 1);
      await updateModule(channel, banphrases);
    }
  }
};


module.exports = {
  add,
  remove,
};
