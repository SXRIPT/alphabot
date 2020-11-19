require('dotenv').config();
const Promise = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));
const isJSON = require('../utils/isJSON');

const client = redis.createClient({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || '127.0.0.1',
  password: process.env.REDIS_PASSWORD || ''
});

const logger = require('../config/logger');

client.on('connected', () => {
  logger.info('redis connected');
  logger.info(`connected ${client.connected}`);
}).on('error', error => {
  logger.error('REDIS ERROR:' + error);
});

const setExpire = async (key, seconds) => {
  client.expire(key, seconds);
};

const checkCache = async key => {
  const data = await client.getAsync(key);
  if (data !== null) {
    return isJSON(data) ? JSON.parse(data) : data;
  }

  return null;
};

const addToCache = async (key, value) => {
  await client.set(key, value);
  client.expire(key, 86400);
  logger.info('ADDED TO CACHE: ' + key);
};

const persistKey = async key => {
  client.persist(key);
};

const addToCachePersist = async (key, value) => {
  await client.set(key, value);
};

module.exports = {
  checkCache,
  addToCache,
  setExpire,
  persistKey,
  addToCachePersist
};
