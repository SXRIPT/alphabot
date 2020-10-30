const client = require('../../../src/alphabot');
const logger = require('../../../config/logger');
const {isNumber, isFinite} = require('../../../utils/numbers');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const ban = async (channel, [username, reason = '', filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.ban(channel, username, reason)
    .then((data) => {
      logger.info(username + 'has been banned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unban = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.unban(channel, username)
    .then((data) => {
      logger.info(username + 'has been unbanned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const timeout = async (channel, parameters) => {
  const username = parameters[0];
  if(parameters.length > 3 || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  let duration = 300;
  let reason = '';

  if(parameters.length > 1) {
    duration = isNumber(parameters[1]) && isFinite(parameters[1]) ? parameters[1] : 300;

    if (!isNumber(parameters[1])) {
      [, reason] = parameters; // eslint prefer-destructuring
    } else if (!isNumber(parameters[2]) && parameters.length > 2) {
      [,, reason] = parameters; // eslint prefer-destructuring
    }
  }

  client.timeout(channel, username, duration, reason)
    .then((data) => {
      logger.info('User ' + username + ' has been timed out for ' + duration + ' in ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const emoteonly = async (channel) => {
  client.emoteonly(channel)
    .then((data) => {
      logger.info(channel + ' emote-only-mode enabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const emoteonlyoff = async (channel) => {
  client.emoteonlyoff(channel)
    .then((data) => {
      logger.info(channel + ' emote-only-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const followersonly = async (channel, [duration = 30, filler]) => {
  if(filler !== undefined || !isNumber(duration) && !isFinite(duration)) return;

  client.followersonly(channel, duration)
    .then((data) => {
      logger.info(channel + ' follower-only-mode enabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const followersonlyoff = async (channel) => {
  client.followersonlyoff(channel)
    .then((data) => {
      logger.info(channel + ' follower-only-mode disabled ' + data);
    }).catch((err) => {
    logger.error(err);
  });
};

const r9kbeta = async (channel) => {
  client.r9kbeta(channel)
    .then((data) => {
      logger.info(channel + ' r9kbeta-mode enabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const r9kbetaoff = async (channel) => {
  client.r9kbeta(channel)
    .then((data) => {
      logger.info(channel + ' r9kbeta-mode disabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const slow = async (channel, [duration = 30, filler]) => {
  if(filler !== undefined || !isNumber(duration) && !isFinite(duration)) return;

  client.slow(channel, duration)
    .then((data) => {
      logger.info(channel + ' slow-mode enabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const slowoff = async (channel) => {
  client.slowoff(channel)
    .then((data) => {
      logger.info(channel + ' slow-mode disabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const subscribers = async (channel) => {
  client.subscribers(channel)
    .then((data) => {
      logger.info(channel + ' subscribers-mode enabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const subscribersoff = async (channel) => {
  client.subscribers(channel)
    .then((data) => {
      logger.info(channel + ' subscribers-mode disabled ' + data);
    }).catch((err) => {
      logger.error(err);
  });
};

const mod = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.mod(channel, username)
    .then((data) => {
      logger.info(username + ' has become a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unmod = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.unmod(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const vip = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.vip(channel, username)
    .then((data) => {
      logger.info(username + ' has become a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unvip = async (channel, [username, filler]) => {
  if(filler !== undefined || username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) return;

  client.unvip(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const clear = async (channel) => {
  client.clear(channel)
    .then((data) => {
      logger.info('Chat from ' + channel + ' has been cleared! ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const host = async (channel, [target, filler]) => {
  if(filler !== undefined || target.length < MIN_USERNAME_LENGTH || target.length > MAX_USERNAME_LENGTH) return;

  client.host(channel, target)
    .then((data) => {
      logger.info(channel + ' is now hosting ' + target + ' | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const unhost = async (channel) => {
  client.unhost(channel)
    .then((data) => {
      logger.info(channel + ' is not hosting anymore | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

const commercial = async (channel, [duration = 30, filler]) => {
  if(filler !== undefined || !isNumber(duration) && !isFinite(duration)) return;

  client.commercial(channel, duration)
    .then((data) => {
      logger.info(channel + ' is now running an commercial for  ' + duration + ' seconds! | ' + data);
    }).catch((err) => {
      logger.error(err);
    }
  );
};

module.exports = {
  ban,
  unban,
  timeout,
  emoteonly,
  emoteonlyoff,
  followersonly,
  followersonlyoff,
  r9kbeta,
  r9kbetaoff,
  slow,
  slowoff,
  subscribers,
  subscribersoff,
  mod,
  unmod,
  vip,
  unvip,
  clear,
  host,
  unhost,
  commercial,
};
