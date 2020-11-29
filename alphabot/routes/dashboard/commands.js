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
    logger.info(`Adding command: ${JSON.stringify(req.body)}`)
    await addCommand(channel, req.body.command)
    return res.status(200).json({status:200, message:'Command has been added'})
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
    logger.info(`Editing command: ${JSON.stringify(req.body)}`)
    await updateCommand(channel, req.body.command)
    return res.status(200).json({status:200, message:'Command has been edited'})
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
    logger.info(`Deleting command: ${JSON.stringify(req.body)}`)
    await deleteCommand(channel, req.body.command)
    return res.status(200).json({status:200, message:'Command has been deleted'})
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});


module.exports = router;
