require('dotenv');
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = (process.env.TOKEN);

bot.on('ready', () => {
  console.log('thotBot started');
})

bot.login(token);
