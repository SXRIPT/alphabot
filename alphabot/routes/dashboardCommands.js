const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');

// Runs a Commercial for a channel with on of the following durations3 0, 60, 90, 120, 150, 180.
router.post('/commercial', async (req, res) => {
    let duration = [30, 60, 90, 120, 150, 180];
    if(duration.includes(req.body.duration)) {
        client.commercial(req.body.channel, req.body.duration)
            .then((data) => {
                return res.status(200).send(data);
            }).catch((err) => {
                return res.status(400).send('Something went wrong: ' + err);
        });
    } else {
        return res.status(400).send('Bad duration time. Available lengths (seconds) are 30, 60, 90, 120, 150, 180.');
    }
});

// Deletes a Message in a channel for a specified message id
router.post('/deletemessage', async (req, res) => {
    client.deletemessage(req.body.channel, req.body.messageid)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
        });
});

// Puts the Chat in emoteonly mode
router.post('/emoteonly', async (req, res) => {
    client.emoteonly(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
    });
});

// Disables emoteonly mode
router.post('/emoteonlyoff', async (req, res) => {
    client.emoteonlyoff(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
    });
});

// Puts the Chat in followesonly mode
router.post('/followersonly', async (req, res) => {
    let duration;
    if(!req.body.duration) duration=30; else duration=req.body.duration;
    client.followersonly(req.body.channel, duration)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
    });
});

// Disables followersonly mode
router.post('/followersonlyoff', async (req, res) => {
    client.followersonlyoff(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Puts the Chat in r9kbeta mode
router.post('/r9kbeta', async (req, res) => {
    client.r9kbeta(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Disables r9kbeta mode
router.post('/r9kbetaoff', async (req, res) => {
    client.r9kbetaoff(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Puts the Chat in slow mode
router.post('/slow', async (req, res) => {
    let duration;
    if(!req.body.duration) duration=30; else duration=req.body.duration;
    client.slow(req.body.channel, duration)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Disables slow mode
router.post('/slowoff', async (req, res) => {
    client.slowoff(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Puts the Chat in subscriber only mode
router.post('/subscribers', async (req, res) => {
    client.subscribers(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Disables subscriber only mode
router.post('/subscribersoff', async (req, res) => {
    client.subscribersoff(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Lists all moderators for a specific channel
router.post('/mods', async (req, res) => {
    client.ban(req.body.channel, req.body.username)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Lists all vips for a specific channel
router.post('/vips', async (req, res) => {
    client.vips(req.body.channel)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

// Whispers a user with an given message
router.post('/whisper', async (req, res) => {
    client.whisper(req.body.username, req.body.message)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
        return res.status(400).send('Something went wrong: ' + err);
    });
});

module.exports = router;