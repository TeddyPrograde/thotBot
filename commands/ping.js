const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'pings bot',
  execute(message, args){
    message.reply('Pog');
  }
}
