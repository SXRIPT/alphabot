const{MongoClient} = require('mongodb');
var allMethods = require('./addGetDelete');
const uri = "";
const clientMongo = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});