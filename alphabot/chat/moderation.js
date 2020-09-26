const client = require('../src/alphabot');
const logger = require('../config/logger');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

const ban = async (channel, command) => {
  if(command.length > 2 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;

  let username = command[0];
  let reason =
    command.length > 1
      ? command[1]
      : '';

  client.ban(channel, username, reason)
    .then((data) => {
      logger.info(username + 'has been banned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unban = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

  client.ban(channel, username)
    .then((data) => {
      logger.info(username + 'has been unbanned from ' + channel + ' | ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const timeout = async (channel, command,) => {
  if(command.length > 3 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

  let duration =
    command.length > 1 ?
      !isNaN(command[1]) && isFinite(command[1]) ?
        command[1] : 300
      : 300;

  let reason =
    command.length > 1 ?
      isNaN(command[1]) ?
        command[1]:
        isNaN(command[2]) ?
          command[2]: ''
      : '';

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

const followersonly = async (channel, command) => {
  if(command.length > 1) return;

  let duration =
    command.length > 0 ?
      !isNaN(command[0]) && isFinite(command[0]) ?
        command[0] : 30
      : 30;

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

const slow = async (channel, command) => {
  if(command.length > 1) {
    logger.info("Command got more parameters then it should. Parameters: " + command);
    return;
  }

  let duration =
    command.length > 0 ?
      !isNaN(command[0]) && isFinite(command[0]) ?
        command[0] : 30
      : 30;

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

const mod = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

  client.mod(channel, username)
    .then((data) => {
      logger.info(username + ' has become a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unmod = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

  client.unmod(channel, username)
    .then((data) => {
      logger.info(username + ' is no more a moderator in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const vip = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

  client.vip(channel, username)
    .then((data) => {
      logger.info(username + ' has become a vip in ' + channel + '! ' + data);
    }).catch((err) => {
      logger.error(err)
    }
  );
};

const unvip = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let username = command[0];

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

const host = async (channel, command) => {
  if(command.length > 1 || command[0].length < MIN_USERNAME_LENGTH || command[0].length > MAX_USERNAME_LENGTH) return;
  let target = command[0];

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


const commercial = async (channel, command) => {
  if(command.length > 1) return;

  let duration =
    command.length > 0 ?
      !isNaN(command[0]) && isFinite(command[0]) ?
        command[0] : 30
      : 30;

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
