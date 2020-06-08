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

//Reads Message
bot.on('message', message => {
  if(message.author.bot) return;

  //Non-prefixed Commands
  if(message.content === 'thot'){
      bot.commands.get('thot').execute(message);
  }

  if(message.content === 'mega thot'){
    bot.commands.get('megathot').execute(message);
  }

  //Prefix check
  if(!message.content.startsWith(PREFIX)) return;
  let args = message.content.substring(PREFIX.length).split(' ');
  switch (args[0]) {

    //Prefixed Commands
    case "animeme":
      bot.commands.get('animeme').execute(message, args);
    break;

    case "bird":
      bot.commands.get('bird').execute(message, args);
    break;

    case "cat":
      bot.commands.get('cat').execute(message, args);
    break;

    case "dog":
      bot.commands.get('dog').execute(message, args);
    break;

    case "food":
      bot.commands.get('food').execute(message, args);
    break;

    case "help":
      bot.commands.get('help').execute(message, args);
    break;

    case "meme":
      bot.commands.get('meme').execute(message, args);
    break;

    case "ping":
      bot.commands.get('ping').execute(message, args);
    break;

    //Moderation Commands
    case "kick":
      bot.commands.get('kick').execute(message, args);
    break;
  }
});
bot.login(token);
