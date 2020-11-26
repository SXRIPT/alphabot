const getAllModules = require('../builtins/helpers/getAllModules');
const moduleHandler = require('../builtins/modules/moderation/index');

const checkMessage = async (channel, userstate, message) => {
    const modules = await getAllModules(channel.substring(1));

    for (let i = 0; i < modules.length; i++) {
        if(modules[i].enabled) {
            let result = await moduleHandler[modules[i].name].apply(null, [channel, message, modules, userstate.username]);
            if(result) return;
        }
    }

};

module.exports = checkMessage;
