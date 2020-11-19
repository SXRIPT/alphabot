/*
   Checks if a user is authorized to execute a command
   this is being checked with the badges of the user which are
   sent with on every message by twitch-tmi
 */
const isAuthorized = async (channel, badges, permission) => {
  if (permission === 'everyone') {
    return true;
  }

  if (permission !== 'everyone' && badges === null) {
    return false;
  }

  if (permission === 'subscriber' && (badges.subscriber !== undefined || badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) {
    return true;
  }

  if (permission === 'vip' && (badges.vip !== undefined || badges.moderator !== undefined || badges.broadcaster !== undefined)) {
    return true;
  }

  if (permission === 'moderator' && (badges.moderator !== undefined || badges.broadcaster !== undefined)) {
    return true;
  }

  return permission === 'broadcaster' && badges.broadcaster !== undefined;
};

module.exports = isAuthorized;
