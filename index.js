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
      message.reply("you may call out the thottery again in 15s");
    } else{
      bot.commands.get('thot').execute(message);

      usedCommandRecently.add(message.author.id);
      setTimeout(() =>{
        usedCommandRecently.delete(message.author.id)
      }, 15000)
    }
  }

  if(message.content === 'mega thot'){
    if(usedCommandRecently.has(message.author.id)){
      message.reply("you may call out the mega thottery again in 30s");
    } else{
      bot.commands.get('megathot').execute(message);

      usedCommandRecently.add(message.author.id);
      setTimeout(() =>{
        usedCommandRecently.delete(message.author.id)
      }, 30000)
    }
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
      if(usedCommandRecently.has(message.author.id)){
        message.reply("please wait 5s before using this command again");
      } else{
        bot.commands.get('help').execute(message, args);

        usedCommandRecently.add(message.author.id);
        setTimeout(() =>{
          usedCommandRecently.delete(message.author.id)
        }, 5000)
      }
    break;

    case "ping":
      if(usedCommandRecently.has(message.author.id)){
        message.reply("please wait 30s before using this command again");
      } else{
        bot.commands.get('ping').execute(message, args);

        usedCommandRecently.add(message.author.id);
        setTimeout(() =>{
          usedCommandRecently.delete(message.author.id)
        }, 30000)
      }
    break;

  }
});

bot.login(token);
