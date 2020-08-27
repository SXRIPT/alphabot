// async function addUser(client, username, nameOfCollection){
//     const result = await client.db("alphabot").collection(nameOfCollection).insertOne(username);
// }

// async function findAllUser(client, nameOfCollection){
//     const result= await client.db("alphabot").collection(nameOfCollection).find({}).toArray();
//     let usernames=[];
//     result.forEach(function(v){ usernames.push(v.username) });
//     return usernames;
// }

// async function deleteUserByUsername(client, usernameToDelete, nameOfCollection){
//     const result = await client.db("alphabot").collection(nameOfCollection).deleteOne({login_name:usernameToDelete});
// }


// const user = require("./userModel");

// var mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://admin:1adminAlphabot1@alphabotcluster0.u4ewc.mongodb.net/alphabot?retryWrites=true&w=majority",{useUnifiedTopology:true, useNewUrlParser:true});
// var db = mongoose.connection;

// var schema = mongoose.Schema({
//     name:String,
//     age:Number
// })

// var Model = mongoose.model("model",schema,"TwitchUsers");

// var doc1 = new user ({
//     username:"bob"
// })




// doc1.save(function(err,doc){
//     if(err) return console.error(err);
//     console.log("Document inserted successfully")
// })

// module.exports={addUser,findAllUser,deleteUserByUsername}