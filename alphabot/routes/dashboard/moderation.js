const express = require('express');

const router = express.Router();
const logger = require('../../config/logger');
const client = require('../../src/alphabot');

// Runs a Commercial for a channel with on of the following durations3 0, 60, 90, 120, 150, 180.
router.post('/commercial', async (request, res) => {
  const duration = [30, 60, 90, 120, 150, 180];
  if (duration.includes(request.body.duration)) {
    client
      .commercial(request.body.channel, request.body.duration)
      .then(data => res.status(200).send(data))
      .catch(error => {
        logger.error(error);
        return res.status(400).send('Something went wrong');
      });
  } else {
    return res
      .status(400)
      .send(
        'Bad duration time. Available lengths (seconds) are 30, 60, 90, 120, 150, 180.'
      );
  }

  return logger.error('Something went wrong');
});

// Deletes a Message in a channel for a specified message id
router.post('/deletemessage', async (request, res) => {
  client
    .deletemessage(request.body.channel, request.body.messageid)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Puts the Chat in emoteonly mode
router.post('/emoteonly', async (request, res) => {
  client
    .emoteonly(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Disables emoteonly mode
router.post('/emoteonlyoff', async (request, res) => {
  client
    .emoteonlyoff(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Puts the Chat in followesonly mode
router.post('/followersonly', async (request, res) => {
  const duration = !request.body.duration ? 30 : request.body.duration;
  client
    .followersonly(request.body.channel, duration)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Disables followersonly mode
router.post('/followersonlyoff', async (request, res) => {
  client
    .followersonlyoff(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Puts the Chat in r9kbeta mode
router.post('/r9kbeta', async (request, res) => {
  client
    .r9kbeta(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Disables r9kbeta mode
router.post('/r9kbetaoff', async (request, res) => {
  client
    .r9kbetaoff(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Something went wrong: ${error}`));
});

// Puts the Chat in slow mode
router.post('/slow', async (request, res) => {
  const duration = !request.body.duration ? 30 : request.body.duration;
  client
    .slow(request.body.channel, duration)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Disables slow mode
router.post('/slowoff', async (request, res) => {
  client
    .slowoff(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Puts the Chat in subscriber only mode
router.post('/subscribers', async (request, res) => {
  client
    .subscribers(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Disables subscriber only mode
router.post('/subscribersoff', async (request, res) => {
  client
    .subscribersoff(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Lists all moderators for a specific channel
router.post('/mods', async (request, res) => {
  client
    .ban(request.body.channel, request.body.username)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Lists all vips for a specific channel
router.post('/vips', async (request, res) => {
  client
    .vips(request.body.channel)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

// Whispers a user with an given message
router.post('/whisper', async (request, res) => {
  client
    .whisper(request.body.username, request.body.message)
    .then(data => res.status(200).send(data))
    .catch(error => {
      logger.error(error);
      return res.status(400).send('Something went wrong');
    });
});

module.exports = router;
