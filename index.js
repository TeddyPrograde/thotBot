require('dotenv');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = (process.env.TOKEN);
const PREFIX = "v!";

//Command Handler
const fs = require ('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

//Bot startup message & status
bot.on('ready', () => {
  console.log('thotBot started');
  bot.user.setActivity('for commands | v!help', {type: 'WATCHING'});
});

//Command Cooldown
const usedCommandRecently = new Set();

//Reads Message
bot.on('message', message => {
  if(message.author.bot) return;

  //Non-prefixed Commands
  if(message.content === 'thot'){
    if(usedCommandRecently.has(message.author.id)){
      message.reply("This command is on a cooldown");
    } else{
      bot.commands.get('thot').execute(message);

      usedCommandRecently.add(message.author.id);
      setTimeout(() =>{
        usedCommandRecently.delete(message.author.id)
      }, 5000)
    }
  }

  if(message.content === 'mega thot'){
    bot.commands.get('megathot').execute(message);
  }

  //Prefix check
  if(!message.content.startsWith(PREFIX)) return;
  let args = message.content.substring(PREFIX.length).split(' ');
  switch (args[0]) {

    //Prefixed Commands
    case "cooldown":
      if(usedCommandRecently.has(message.author.id)){
        message.reply("This command is on a cooldown");
      } else{
        //command

        usedCommandRecently.add(message.author.id);
        setTimeout(() =>{
          usedCommandRecently.delete(message.author.id)
        }, 5000)
      }
    break;

    case "help":
      bot.commands.get('help').execute(message, args);
    break;

    case "ping":
      bot.commands.get('ping').execute(message, args);
    break;

  }
});

bot.login(token);
