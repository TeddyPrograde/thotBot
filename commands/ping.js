const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Pings the bot',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setDescription('Pong!')
    .setColor(0xed2d5d)
    message.channel.send(embed);

  }
}
