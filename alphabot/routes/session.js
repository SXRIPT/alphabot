const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');

router.post('/join', async (req, res) => {
    let username = req.body.username;
    if(!username) return res.status(404).send('No username provided');

    client.join(username)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });

    // add to database
});

router.post('/disconnect', async (req, res) => {
    let username = req.body.username;
    if(!username) return res.status(404).send('No username provided');

    client.part(username)
        .then((data) => {
            console.log(data);
        }).catch((err) => {
        res.status(400).send('Something went wrong: ' + err);
    });

    // delete from database
});

module.exports = router;