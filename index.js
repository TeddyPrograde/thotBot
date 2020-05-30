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

//Commands
bot.on('message', message => {

  //Easy Access Thottery
  if(message.content === 'thot'){
    bot.commands.get('thot').execute(message);
  }

  if(message.content === 'mega thot'){
    bot.commands.get('megathot').execute(message);
  }

  //Prefix arg
  if(!message.content.startsWith(PREFIX) || message.author.bot) return;
  let args = message.content.substring(PREFIX.length).split(' ');
  switch (args[0]) {

    case "help":
      bot.commands.get('help').execute(message, args);
    break;

    case "ping":
      bot.commands.get('ping').execute(message, args);
    break;

  }
});

bot.login(token);
//Bot invite link - https://discordapp.com/oauth2/authorize?client_id=714189068094668912&scope=bot&permissions=8
