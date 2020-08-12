require('dotenv/config') //creds
const{MongoClient} = require('mongodb');
var allMethods = require('./addGetDelete');
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function main (){
    try{
        await client.connect();
        await allMethods.addUser(client,{username:"Auto"},"TwitchUsers");
    }catch(e){
        console.error(e);
    }finally{
        client.close();
    }
}

main().catch(console.err);