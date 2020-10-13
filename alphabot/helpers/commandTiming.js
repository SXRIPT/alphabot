const userDurations = [];
const globalDurations = [];

const checkIfExistsUser = async (command,username,userDuration) => {
    let exists = false;
    let cooldownOver = false;

    userDurations.forEach((v)=>{
        if(v.command===command && v.username===username){
            exists = true;
            if(v.time+(userDuration*1000)<=Date.now()) {
                v.time=Date.now();
                cooldownOver=true;
            }
        }});
    if(!exists){
        userDurations.push({command,username,time:Date.now()});
        return true;
    }
    return cooldownOver;
};

const checkIfExistsGlobal = async (command, channel, globalDuration) => {
    let exists = false;
    let cooldownOver = false;

    globalDurations.forEach((v) => {
        if(v.command===command && v.channel===channel) {
            exists = true;
            if(v.time+(globalDuration*1000)<=Date.now()) {
                v.time=Date.now();
                cooldownOver=true;
            }
        }});
    if(!exists){
        globalDurations.push({command,channel,time:Date.now()});
        return true;
    }
    return cooldownOver;
};

const checkCommandDuration = async ({command, cooldown}, channel, user) => {
    if(user===channel)
        return true;

    const {userDuration, globalDuration, globalCooldown} = cooldown;

    if(userDuration === 0 && !globalCooldown) return true;

    if(globalCooldown && userDuration===0 || userDuration <= globalDuration){
        const result = await checkIfExistsGlobal(command,channel,globalDuration);
        return result;
    }

    const result = await checkIfExistsUser(command,user,userDuration);
    return result;
};

module.exports = {
    checkCommandDuration
};
