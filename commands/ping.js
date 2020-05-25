const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Pings the bot',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .addField('Pong!')
    .setColor(0xff2a68)
    message.channel.send(embed);

  }
}
