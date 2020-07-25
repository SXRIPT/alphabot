const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');

router.post('/mods', async (req, res) => {
    client.ban(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/vips', async (req, res) => {
    client.vips(req.body.channel)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});

router.post('/whisper', async (req, res) => {
    client.whisper(req.body.username, req.body.message)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });
});


module.exports = router;