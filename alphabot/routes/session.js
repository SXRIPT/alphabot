require('dotenv').config();
const express = require('express');

const router = express.Router();
<<<<<<< Updated upstream
let client = require('../src/alphabot');
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION,{useUnifiedTopology:true,useNewUrlParser:true});
var db = mongoose.connection;
const User = require("../mongodb/userModel");
const { deleteOne } = require('../mongodb/userModel');
=======
const logger = require('../config/logger');
const client = require('../src/alphabot');
const { addUser, deleteUser } = require('../db/sessionFunctions');
>>>>>>> Stashed changes

router.post('/join', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(404).send('No username provided');

  client
    .join(username)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      logger.error(err);
      return res.status(400).send('Something went wrong');
    });

<<<<<<< Updated upstream
    // add to database
    var newUser = new User({
        username:username
    })

    newUser.save(function(err,doc){
        if(err)return console.error(err);
        console.log("Document inserted successfully")
    })
=======
  await addUser(username);
>>>>>>> Stashed changes
});

router.post('/part', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(404).send('No username provided');

  client
    .part(username)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      logger.error(err);
      return res.status(400).send('Something went wrong');
    });

<<<<<<< Updated upstream
    // delete from database
    var query = {username:username}


    User.deleteOne(query,function(err,result){
        if(err) return console.error(err);
        console.log("Deleted successfully");
    })
=======
  await deleteUser(username);
>>>>>>> Stashed changes
});

module.exports = router;
