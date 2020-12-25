const { Error } = require('mongoose');
const User = require('../models/User');
const logger = require('../config/logger');
const Linktree = require('../models/Linktree');
const { addToCache, checkCache, setExpire } = require('../middleware/cacheCommands');

const addLink = async (channel, linktreeJSON) => {
  const query = { username: channel };
  let updateQuery;
  let goOn = true;
  let allLinks = [];
  const newLink = new Linktree(linktreeJSON);

  await User.findOne({ username: channel })
    .then((result) => {
      if (result.links.length === 0) {
        updateQuery = {
          username: result.username,
          links: newLink,
        };
      } else {
        result.links.forEach((v) => {
          if (v.link === newLink.link) {
            goOn = false;
          }
        });
        allLinks = result.links;
        allLinks.push(linktreeJSON);
        updateQuery = {
          username: result.username,
          links: allLinks,
        };
      }
    });
  if (goOn) {
    await User.updateOne(query, updateQuery, (err) => {
      if (err) return logger.error(err);
      let key = channel + "-linktree";
      setExpire(key , 5);
      logger.info('Document inserted successfully');
    });
  } else {
    logger.error('Link already exists!');
    throw new Error('Link already exists!');
  }
};

const deleteLink = async (channel, link) => {
  let isFound = false;
  const allLinks = [];
  await User.findOne({ username: channel })
    .then((result) => {
      result.links.forEach((v) => {
        if (v.link !== link) {
          allLinks.push(v);
        } else {
          isFound = true;
        }
      });
    });
  const query = { username: channel };
  const updateQuery = {
    username: channel,
    links: allLinks,
  };
  if (isFound) {
    await User.updateOne(query, updateQuery, (err) => {
      if (err) {
        logger.error(err);
        throw new Error(err);
      }
      let key = channel + '-linktree';
      setExpire(key, 5);
      logger.info('Link deleted successfully');
    });
  } else {
    logger.error('Link was not found');
    throw new Error('Link was not found');
  }
};

const findAllLinks = async (user) => {
  let links = [];
  let key = user + "-linktree";
  const cache = await checkCache(key);
  if (cache) {
    logger.info('Existing CACHE found!');
    return cache;
  }
  const result = await findOneUser(user);
  links = result.links

  if(links.length>0)
    await addToCache(user, JSON.stringify(links));
  return links;
};

const findOneUser = async (user) => {
  await User.findOne({ username: user }, (err, res) => {
    if (err) {
      logger.error('ERROR: ' + err);
      throw new Error(err);
    }
    return res;
  });
};

module.exports = {
  addLink,
  deleteLink,
  findAllLinks,
}
