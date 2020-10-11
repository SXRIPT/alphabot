const userDurations = [];
const globalDurations = [];

const checkIfExistsUser = async (command,username,cooldown) => {
    let exists = false;
    let cooldownLeft;
    userDurations.forEach((v)=>{
        if(v.command===command && v.username===username)
            cooldownLeft=v.cooldown;
            exists = true;
    })
    if(!exists){
        userDurations.push({command:command,user:username,cooldown:cooldown});
        return false;
    }
    else if (cooldownLeft===0)
        return true;
    else
        return false;
}

const checkIfExistsGlobal = async (command, channel, cooldown) =>{
    let exists = false;
    let cooldownLeft;
    globalDurations.forEach((v)=>{
        if(v.command===command && v.channel===channel)
            cooldownLeft = v.cooldown;
            exists = true;
    })
    if(!exists){
        globalDurations.push({command:command,channel:channel,cooldown:cooldown});
        return false;
    }
    else if (cooldownLeft===0)
        return true;
    else
        return false;
}

const checkCommandDuration = async (command, channel, user) => {
    if(user.username===channel.username)
        return true;
    
    const userDuration = command.cooldown.userDuration;
    const globalDuration = command.cooldown.globalDuration;
    const globalCooldown = command.cooldown.globalCooldown;
    
    if(userDuration === 0 && !globalCooldown)
        return true;

    else if(!globalCooldown && userDuration!==0){
        const result = await checkIfExistsUser(command.command,user.username,userDuration);
        return result;
    }   

    else if(globalCooldown && userDuration===0){
        const result = await checkIfExistsGlobal(command.command,channel.username,globalDuration);
        return result;
    }
}

const xxx = setInterval(function(){
    userDurations.forEach((v)=>{
        if(v.cooldown!==0)
            v.cooldown = v.cooldown-1;
    })

    globalDurations.forEach((v)=>{
        if(v.cooldown!==0)
            v.cooldown = v.cooldown-1;
    })
},1000);

module.exports = checkCommandDuration;