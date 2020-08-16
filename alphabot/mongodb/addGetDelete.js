async function addUser(client, username, nameOfCollection){
    const result = await client.db("alphabot").collection(nameOfCollection).insertOne(username);
    console.log(result.insertedId);
}

async function findAllUser(client, nameOfCollection){
    const result = await client.db("alphabot").collection(nameOfCollection).find({}).toArray();
    console.log(result);
}

async function deleteUserByUsername(client, usernameToDelete, nameOfCollection){
    const result = await client.db("alphabot").collection(nameOfCollection).deleteOne({username:usernameToDelete});
    console.log(result.deletedCount);
}

module.exports={addUser,findAllUser,deleteUserByUsername}
