const express = require('express');
const activeUserFunctions = require('../db/activeUserFunctions');

const router = express.Router();
const logger = require('../config/logger');
const client = require('../src/alphabot');
const { addUser } = require('../db/sessionFunctions');

router.post('/join', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(404).send('No username provided');

  client
    .join(username)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      logger.error(err);
      return res.status(400).send('Something went wrong');
    });

  await activeUserFunctions.addUser(username);
});

router.post('/add', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(404).send('No username provided');

  await addUser(username);
});

router.post('/part', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(404).send('No username provided');

  client
    .part(username)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      logger.error(err);
      return res.status(400).send('Something went wrong');
    });

  await activeUserFunctions.deleteUser(username);
});

module.exports = router;
