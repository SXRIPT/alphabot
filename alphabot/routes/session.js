require('dotenv').config();
const express = require('express');
const router = express.Router();
let client = require('../src/alphabot');
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION,{useUnifiedTopology:true,useNewUrlParser:true});
var db = mongoose.connection;
const User = require("../mongodb/userModel");
const { deleteOne } = require('../mongodb/userModel');

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
    var newUser = new User({
        username:username
    })

    newUser.save(function(err,doc){
        if(err)return console.error(err);
        console.log("Document inserted successfully")
    })
});

router.post('/part', async (req, res) => {
    let username = req.body.username;
    if(!username) return res.status(404).send('No username provided');

    client.part(username)
        .then((data) => {
            return res.status(200).send(data);
        }).catch((err) => {
            return res.status(400).send('Something went wrong: ' + err);
    });

    // delete from database
    var query = {username:username}


    User.deleteOne(query,function(err,result){
        if(err) return console.error(err);
        console.log("Deleted successfully");
    })
});

module.exports = router;