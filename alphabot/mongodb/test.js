require('dotenv').config() //creds
const{MongoClient} = require('mongodb');
var allMethods = require('./addGetDelete');
const uri = "mongodb+srv://admin:1adminAlphabot1@alphabotcluster0.u4ewc.mongodb.net/alphabot?retryWrites=true&w=majority";
const clientMongo = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function main (){
    try{
        await clientMongo.connect();
        await allMethods.deleteUserByUsername(clientMongo,{username:"kingyigi"},"TwitchUsers");
    }catch(e){
        console.error(e);
    }finally{
        clientMongo.close();
    }
}

main().catch(console.err);

