const User = require('../models/User');
const Command = require('../models/Command');
const logger = require('../config/logger');

const addCommand = async (username, commandJSON) => {
<<<<<<< Updated upstream
  var query;
  var updateQuery;
  var allCommands = [];

  //TODO commandJSON params
  const command = new Command({
    command: commandJSON.command,
    enabled: true,
    permission: commandJSON.permission
  });

  await User.findOne({ username: username }).then(result=>{
      if(result.commands===[]){
        updateQuery = {
          username:result.username,
          commands: command
        }}
        else{
          result.commands.forEach(v=>{
            if(v.command===addMyCommand.command){
              return logger.error("Command already exists!");
          }
            allCommands.push(v);
          })
          allCommands.push(command);
          updateQuery = {
            username:result.username,
            commands: allCommands
          }
        }
      }
  );

  await User.updateOne(query,updateQuery,(err)=>{
        if(err) return logger.error(err);
        logger.info('Document inserted successfully');
  })
};

const deleteCommand = async (username, command) => {
  allCommands = [];

  await User.findOne({username:username}).then(result=>{
    if(err) return logger.error(err);
    result.commands.forEach(v=>{
      if(v.command!=command)
      {
        allCommands.push(v);
      }
    })
  })
  query = {username:username};
  updateQuery ={
    username:username,
    commands:allCommands
  }
  await User.updateOne(query,updateQuery,(err)=>{
    if(err) return logger.error(err);
    logger.info("Command deleted successfully");
  })
};

const findAllCommands = async (username) => {
  const commands = [];
  await User.findOne({username:username}, (err, res) => {
    if(err) return logger.error(err);
    res.commands.forEach(v => {
      commands.push(v);
    });
  });
  return commands;
};

const updateCommand = async (username, commandJSON) => {

}

=======
  const user = await User.findOne({ username: username });

  const message = "Your custom message";

  const command = new Command({
    command: message,
    enabled: true,
    permission: 'everyone'
  });
  user.command = command;
  await user.save((err) => {
    if (err) return logger.error(err);
    logger.info('Document inserted successfully');
  });
};

const deleteCommand = async () => {

};

const findAllCommands = async () => {
  const commands = [];
  await User.find({}, (err, res) => {
    res.forEach(user => {
      commands.push(user.command);
    });
  });

  return commands;
};

>>>>>>> Stashed changes
module.exports = {
  addCommand,
  deleteCommand,
  findAllCommands,
};
