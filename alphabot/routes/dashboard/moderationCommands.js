const express = require('express');

const router = express.Router();
const {updateModule} = require('../../db/moduleFunctions');

router.post('/update', async (req, res) => {
  if(!req.body) return res.status(400).send('Provided data from body is incorrect');
  // Spread Operator not good since the order might not be the same everytime
  // let {channel, ...moduleJSON} = req.body;
  try {
    await updateModule(req.body.channel, req.body);
  } catch (error) {
    return res.status(500).send('Something went wrong! ' + JSON.stringify(error));
  }
  return res.status(200).send('Updated Successfully');
});

module.exports = router;
