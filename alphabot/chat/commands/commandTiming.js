const userDurations = [];
const globalDurations = [];

const checkIfExistsUser = async (command,username,userDuration) => {
    let exists = false;
    let cooldownOver = false;

    userDurations.forEach((v)=>{
        if(v.command===command && v.username===username){
            exists = true;
            if(v.time+(userDuration*1000)<=Date.now())
            {
                v.time=Date.now();
                cooldownOver=true;
            }
    }})
    if(!exists){
        userDurations.push({command:command,username:username,time:Date.now()});
        return true;
    }
    else if (cooldownOver)
        return true;
    else
        return false;
}

const checkIfExistsGlobal = async (command, channel, globalDuration) =>{
    let exists = false;
    let cooldownOver = false;

    globalDurations.forEach((v)=>{
        if(v.command===command && v.channel===channel){
            exists = true;
            if(v.time+(globalDuration*1000)<=Date.now())
            {
                v.time=Date.now();
                cooldownOver=true;
            }
    }})
    if(!exists){
        globalDurations.push({command:command,channel:channel,time:Date.now()});
        return true;
    }
    else if (cooldownOver)
        return true;
    else
        return false;
}

const checkCommandDuration = async (command, channel, user) => {
    if(user===channel)
        return true;
    
    const userDuration = command.cooldown.userDuration;
    const globalDuration = command.cooldown.globalDuration;
    const globalCooldown = command.cooldown.globalCooldown;
    
    if(userDuration === 0 && !globalCooldown)
        return true;
        
    else if(globalCooldown && userDuration===0 || userDuration <= globalDuration){
        const result = await checkIfExistsGlobal(command.command,channel,globalDuration);
        return result;
    }
    else 
    {
        const result = await checkIfExistsUser(command.command,user,userDuration);
        return result;
    }
}

module.exports = checkCommandDuration;