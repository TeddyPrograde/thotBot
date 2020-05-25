require('dotenv');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = (process.env.TOKEN);
const PREFIX = "v!"

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
});

//Commands
bot.on('message', message => {

  //Prefix arg
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {

    case "ping":
      bot.commands.get('ping').execute(message, args);
    break;

  }

  //Easy Access Thottery
  if(message.content === 'thot'){
    message.channel.send('https://imgur.com/a/SzwP8tb');

  };
});

bot.login(token);
