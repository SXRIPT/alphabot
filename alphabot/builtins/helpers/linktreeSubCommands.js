const client = require('../../src/alphabot');
const {addLink, deleteLink} = require('../../db/linktreeFunctions');

const add = async ({channel, args}, userstate) => {
  await addLink(channel, {
    'link': args[2],
    'username': userstate.username
  });
};

const remove = async ({channel, args}) => {
  await deleteLink(channel, args[2]);
};

const show = async ({channel, args}, userstate) => {
  await client.say(channel, `@${userstate.username}, alphabot.wtf/${channel}/linktree`);
};

module.exports = {
  add,
  remove,
  show,
};
