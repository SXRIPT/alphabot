const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');

router.post('/commercial', async (req, res) => {
    // Run commercial on a channel for X seconds. Available lengths (seconds) are 30, 60, 90, 120, 150, 180.
    let duration = [30, 60, 90, 120, 150, 180];
    if(duration.includes(req.body.duration)) {
        client.commercial(req.body.channel, req.body.duration)
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
            res.status(400).send('Something went wrong: ' + err);
        });
    } else {
        res.status(400).send('Bad duration time. Available lengths (seconds) are 30, 60, 90, 120, 150, 180.')
    }
});

router.post('/deletemessage', async (req, res) => {
    client.deletemessage(req.body.channel, req.body.messageid)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(400).send('Something went wrong: ' + err);
        });
});

router.post('/emoteonly', async (req, res) => {
    client.emoteonly(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/emoteonlyoff', async (req, res) => {
    client.emoteonlyoff(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/followersonly', async (req, res) => {
    let duration;
    if(!req.body.duration) duration=30; else duration=req.body.duration;
    client.followersonly(req.body.channel, duration)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/followersonlyoff', async (req, res) => {
    client.followersonlyoff(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/r9kbeta', async (req, res) => {
    client.r9kbeta(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/r9kbetaoff', async (req, res) => {
    client.r9kbetaoff(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/slow', async (req, res) => {
    let duration;
    if(!req.body.duration) duration=30; else duration=req.body.duration;
    client.slow(req.body.channel, duration)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/slowoff', async (req, res) => {
    client.slowoff(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/subscribers', async (req, res) => {
    client.subscribers(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/subscribersoff', async (req, res) => {
    client.subscribersoff(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

module.exports = router;