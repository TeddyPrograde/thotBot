require('dotenv');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = (process.env.TOKEN);
const PREFIX = "v!"

const fs = require ('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.log('thotBot started');
});

bot.on('message', message => {
  let args = message.content.substring(PREFIX.length);

  switch (args[0]) {

    case "ping":
      bot.commands.get('ping').execute(message.args);
    break;

  }
});

bot.login(token);
