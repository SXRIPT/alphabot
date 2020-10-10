const { isFinite, isNumber } = require('../../utils/numbers');

const re = /\${(\w+)(?:(?:\.(\w+))|(?: (\d+(?: \d+)*|"[^"]+"(?: "[^"]+")*)))?}/g;
const argRe = /\${(\d+)}/g;
const subArgRe = /(\d+|"[^"]*")/g;

const commands = {
  greater: (args) => args[0] > args[1] ? args[0] : args[1],
  random: (args) => args[1] ? Math.floor(Math.random() * (parseInt(args[1], 10) + 1 - parseInt(args[0], 10)) + parseInt(args[0], 10)) : Math.floor(Math.random() * (parseInt(args[0], 10) + 1)),
  url: (args, mappedArgs) => `https://twitch.tv/${mappedArgs.channel.name.substring(1)}`,
};

const replaceArgs = async (input, args) => {
  let match;
  let dupeInput = input;

  // Replaces all args -> ${1} - ${n}
  while ((match = argRe.exec(input)) !== null) {
    dupeInput = dupeInput.replace(match[0], args[parseInt(match[1], 10) - 1]);
  }
  return dupeInput;
};

const replaceSubArgs = async (match, dupeInput, command, mappedArgs) => {
  let subMatch;
  const args = [];
  while ((subMatch = subArgRe.exec(match[3])) !== null) {
    args.push(!isFinite(subMatch[1]) && !isNumber(subMatch[1]) ? subMatch[1] : parseInt(subMatch[1], 10));
  }
  return dupeInput.replace(match[0], command(args, mappedArgs));
};

const responseParse = async (input, args, mappedArgs) => {
  let match;
  const dupeInput = await replaceArgs(input, args);
  let dupe2Input = dupeInput;
  while ((match = re.exec(dupeInput)) !== null) {
    if (!match[3] && match[2]) {
      let val = mappedArgs[match[1]];
      if (!val) {
        continue;
      }
      val = val[match[2]];
      dupe2Input = dupe2Input.replace(match[0], val);
      continue;
    }
    const command = commands[match[1]];
    if (!command) {
      continue;
    }
    dupe2Input = await replaceSubArgs(match, dupe2Input, command, mappedArgs);
  }
  return dupe2Input;
};

module.exports = {
  responseParse,
};
