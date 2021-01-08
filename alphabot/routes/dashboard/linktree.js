const express = require('express');

const router = express.Router();
const logger = require('../../config/logger');
const { addLink, deleteLink } = require('../../db/linktreeFunctions');

router.post('/add', async (req, res) => {
  if(!req.body || !req.body.channel) {
    return res.status(400).json({status: 400, message: 'Something is wrong with the provided data!'});
  }
  const {channel} = req.body;

  try {
    logger.info(`Adding Linktree: ${JSON.stringify(req.body)}`)
    await addLink(channel, {'link': req.body.link, 'username': req.body.username})
    return res.status(200).json({status:200, message:'Link has been added'})
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});

router.post('/delete', async (req, res) => {
  if(!req.body || !req.body.channel || !req.body.link) {
    return res.status(400).json({status: 400, message: 'Something is wrong with the provided data!'});
  }
  const {channel, link} = req.body;

  try {
    logger.info(`Deleting Linktree: ${JSON.stringify(req.body)}`)
    await deleteLink(channel, link)
    return res.status(200).json({status:200, message:'Link has been deleted'})
  } catch (e) {
    logger.error("Something went wrong! " + e);
    return res.status(500).json({status: 500, message: 'Something went wrong!'});
  }
});

module.exports = router;
