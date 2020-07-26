let checkCommand = require('./checkCommand');
let string = '[20:17] info: [#scriptx] <scriptx>: !HahaElf HahaLean';

let tokenizer = async (message) => {
    let token = message.split(' ');
    token = token.slice(2);

    /*
    Checks if user message start with the ! prefix
    TODO: for custom prefix would need to get streamers settings from db
    then use streamers prefix and check if starts with it
    */
    if (!token[2].startsWith('!')) {
        return; // maybe later build in log generator
    }

    token[0] =  token[0].replace(/[^\w\s]/g, '');

    // TODO: build in check if token[2] is a command (need db help)
    if(!await checkCommand.isCommand(token[0], token[2])) return;


    console.log(token);
};

let r = tokenizer(string);