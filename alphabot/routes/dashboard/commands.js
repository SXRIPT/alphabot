const express = require('express');

const router = express.Router();
const logger = require('../../config/logger');
const {addCommand, updateCommand, deleteCommand} = require('../../db/commandFunctions');

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 25;

router.post('/add', async (req, res) => {
  const {channel} = req.query
  if(!req.body || !channel || channel.length < MIN_USERNAME_LENGTH ||channel.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({status: 400, message: 'Something is wrong with the provided data!'});
  }

  try {
    await addCommand(req.params.channel, req.body)
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});

router.put('/edit', async (req, res) => {
  const {channel} = req.query
  if(!req.body || !channel || channel.length < MIN_USERNAME_LENGTH ||channel.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({status: 400, message: 'Something is wrong with the provided data!'});
  }

  try {
    await updateCommand(req.params.channel, req.body)
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});

router.delete('/delete', async (req, res) => {
  const {channel} = req.query
  if(!req.body || !channel || channel.length < MIN_USERNAME_LENGTH ||channel.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({status: 400, message: 'Something is wrong with the provided data!'});
  }

  try {
    await deleteCommand(req.params.channel, req.body)
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});


module.exports = router;
