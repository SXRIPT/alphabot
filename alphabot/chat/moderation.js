const client = require('../src/alphabot');
const logger = require('../config/logger');

const ban = async (channel, username, reason = '') => {
  client.ban(channel, username, reason)
    .then((data) => {
      logger.info(username + 'has been banned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unban = async (channel, username) => {
  client.ban(channel, username)
    .then((data) => {
      logger.info(username + 'has been unbanned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const timeout = async (channel, username, duration = 300, reason = '') => {
  client.timeout(channel, username, duration, reason)
    .then((data) => {
      logger.info('User ' + username + ' has been timed out for ' + duration + ' in ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
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

const followersonly = async (channel, duration = 30) => {
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

const slow = async (channel, duration = 30) => {
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

const mod = async (channel, username) => {
  client.mod(channel, username)
    .then((data) => {
      logger.info(username + ' has become a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unmod = async (channel, username) => {
  client.unmod(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const vip = async (channel, username) => {
  client.vip(channel, username)
    .then((data) => {
      logger.info(username + ' has become a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unvip = async (channel, username) => {
  client.unvip(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const clear = async (channel) => {
  client.clear(channel)
    .then((data) => {
      logger.info('Chat from ' + channel + ' has been cleared! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const host = async (channel, target) => {
  client.host(channel, target)
    .then((data) => {
      logger.info(channel + ' is now hosting ' + target + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unhost = async (channel) => {
  client.unhost(channel)
    .then((data) => {
      logger.info(channel + ' is not hosting anymore | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const commercial = async (channel, duration) => {
  client.commercial(channel, duration)
    .then((data) => {
      logger.info(channel + ' is now running an commercial for  ' + duration + ' seconds! | ' + data);
    }).catch((err) => {
      logger.error(err)
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
