const {isFinite, isNumber} = require('../../utils/numbers');

const re = /\$\{(\w+)(?:(?:\.(\w+))|(?: (\d+(?: \d+)*|\"[^"]+\"(?: \"[^"]+\")*)))?\}/g;
const argRe = /\$\{(\d+)\}/g;
const subArgRe = /(\d+|\"[^"]*\")/g

const commands = {
  greater: (args) => args[0] > args[1] ? args[0] : args[1],
  random: (args) => args[1] ? Math.floor(Math.random() * (parseInt(args[1], 10) + 1 - parseInt(args[0], 10)) + parseInt(args[0],10)) : Math.floor(Math.random() * (parseInt(args[0],10) + 1)),
  url: (args, channel) => `https://twitch.tv/${channel}`
};

const responseParse = (input, args, mappedArgs) => {
  let match;
  let dupeInput = input;
  /*
      The first loop replaces all arguments ${1}-${n}
      Chat Message --> !random 30 100
                               |   |
                              /    \
                           ${1}   ${2}
      The response in the DB of !random is defined like this for example:
          "Your random number is ${radnomnum ${1} ${2}}"
      The first while loop will replace the string with: "Your random number is ${radnomnum 30 100}"
  */
  while ((match = argRe.exec(input)) !== null) {
    dupeInput = dupeInput.replace(match[0], args[parseInt(match[1], 10) - 1])
  }

  let dupe2Input = dupeInput;
  while ((match = re.exec(dupeInput)) !== null) {
    if (!match[3] && match[2]) {
      let val = mappedArgs[match[1]]
      if (!val) continue;
      if (match[2]) val = val[match[2]]
      dupe2Input = dupe2Input.replace(match[0], val)
      continue
    }
    const command = commands[match[1]];
    if (!command) {
      continue;
    }
    let subMatch;
    const args2 = [];
    while ((subMatch = subArgRe.exec(match[3])) !== null) {
      args2.push(!isFinite(subMatch[1]) && !isNumber(subMatch[1]) ? subMatch[1] : parseInt(subMatch[1], 10));
    }
    dupe2Input = dupe2Input.replace(match[0], command(args2, "scriptx"));
  }
  return dupe2Input;
}



module.exports = {
  responseParse,
};
