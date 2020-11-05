const clear = require('./clear');
const timeout = require('./timeout');
const commercial = require('./commercial');
const {ban, unban} = require('./ban');
const {mod, unmod} = require('./mod');
const {vip, unvip} = require('./vip');
const {host, unhost} = require('./host');
const {slow, slowoff} = require('./slow');
const {r9kbeta, r9kbetaoff} = require('./r9kbeta');
const {emoteonly, emoteonlyoff} = require('./emoteonly');
const {subscribers, subscribersoff} = require('./subscribers');
const {followersonly, followersonlyoff} = require('./followersonly');

module.exports = {
  clear,
  timeout,
  commercial,
  ban,
  unban,
  mod,
  unmod,
  vip,
  unvip,
  host,
  unhost,
  slow,
  slowoff,
  r9kbeta,
  r9kbetaoff,
  emoteonly,
  emoteonlyoff,
  subscribers,
  subscribersoff,
  followersonly,
  followersonlyoff,
};
