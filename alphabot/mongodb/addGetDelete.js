async function addUser(client, username, nameOfCollection){
    const result = await client.db("alphabot").collection(nameOfCollection).insertOne(username);
}

async function findAllUser(client, nameOfCollection){
    const result= await client.db("alphabot").collection(nameOfCollection).find({}).toArray();
    let usernames=[];
    result.forEach(function(v){ usernames.push(v.username) });
    return usernames;
}

async function deleteUserByUsername(client, usernameToDelete, nameOfCollection){
    const result = await client.db("alphabot").collection(nameOfCollection).deleteOne({login_name:usernameToDelete});
}

module.exports={addUser,findAllUser,deleteUserByUsername}