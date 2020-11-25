const { Error } = require('mongoose');
const User = require('../models/User');
const Module = require('../models/Module');
const logger = require('../config/logger');
const { addToCache, checkCache, setExpire } = require('../middleware/cacheCommands');

const findAllModules = async (user) => {
  const cacheKey = `${user}-modules`;
  let modules = [];
  const cache = await checkCache(cacheKey);
  if (cache && cache.length > 0) {
    logger.info('Existing CACHE found!');
    return cache;
  }
  await User.findOne({ username: user }, (err, res) => {
    if (err) {
      logger.error('ERROR: ' + err);
      throw new Error(err);
    }
    modules = res.modules;
  });

  if(modules.length>0)
    await addToCache(cacheKey, JSON.stringify(modules));
  return modules;
};

const findModule = async (user,name) => {
  const cacheKey = `${user}-modules`;
  let module;
  let modules;
  const cache = await checkCache(cacheKey);
  if (cache) {
    logger.info('Existing CACHE found!');
    cache.forEach(v=>{
      if(name===v.name)
        return v;
    })
  }
  await User.findOne({ username: user }, (err, res) => {
    if (err) {
      logger.error('ERROR: ' + err);
      throw new Error(err);
    }
    res.modules.forEach((v)=>{
      if(v.name===name)
        module=v;
    })
    modules = res.modules;
  });

  if(module!==undefined) {
    await addToCache(cacheKey, JSON.stringify(modules));
    return module;
  } else {
    logger.error('Module was not found');
    throw new Error('Module was not found');
  }
};

const updateModule = async (user, moduleJSON) => {
  const updatedModules = [];
  const query = { username: user };
  let updatedQuery;
  let isFound = false;
  const newModule = new Module({
    name:moduleJSON.name
  });
  await User.findOne({ username: user })
    .then((result) => {
      result.modules.forEach((v) => {
        if (v.name === moduleJSON.name) {
          if(moduleJSON.penalty===undefined)
            newModule.penalty=v.penalty;
          else newModule.penalty=moduleJSON.penalty;
          if(moduleJSON.enabled===undefined)
            newModule.enabled=v.enabled;
          else newModule.enabled=moduleJSON.enabled;
          if(moduleJSON.timeoutDuration===undefined)
            newModule.timeoutDuration=v.timeoutDuration;
          else newModule.timeoutDuration=moduleJSON.timeoutDuration;
          if(moduleJSON.parameters===undefined)
            newModule.parameters=v.parameters;
          else newModule.parameters=moduleJSON.parameters;
          updatedModules.push(newModule);
          isFound = true;
        } else {
          updatedModules.push(v);
        }
      });
      updatedQuery = {
        username: user,
        commands: result.commands,
        modules: updatedModules
      };
    });
  if (isFound) {
    await User.updateOne(query, updatedQuery, (err) => {
      if (err) {
        logger.error(err);
        throw new Error(err);
      }
      logger.info('Successfully updated module');
      setExpire(user, 5);
    });
  } else {
    logger.error('Module was not found');
    throw new Error('Module was not found');
  }
};
module.exports = {
  findAllModules,
  updateModule,
  findModule,
};
