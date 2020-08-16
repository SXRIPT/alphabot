const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');

require('dotenv').config(); //creds
const{MongoClient} = require('mongodb');
var allMethods = require('../mongodb/addGetDelete');
const uri = process.env.DB_CONNECTION;
const clientMongo = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});


router.post('/join', async (req, res) => {
    let username = req.body.username;
    if(!username) return res.status(404).send('No username provided');

    client.join(username)
        .then((data) => {
             return res.status(200).send(data);
        }).catch((err) => {
             return res.status(400).send('Something went wrong: ' + err);
    });

    // add to database
    try{
        await clientMongo.connect();
        await allMethods.addUser(clientMongo,{login_name:req.body.username},"TwitchUsers")//Todo name of collection
    }catch(e){
        console.error(e);
    }
});

router.post('/part', async (req, res) => {
    let usernameX = req.body.username;
    if(!usernameX) return res.status(404).send('No username provided');

    client.part(usernameX)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
    });

    // delete from database
    try{
        await clientMongo.connect();
        await allMethods.deleteUserByUsername(clientMongo,req.body.username,"TwitchUsers") //Todo name of collection
    }catch(e){
        console.error(e);
    }
});

module.exports = router;