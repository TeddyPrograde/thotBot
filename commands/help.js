const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows all commands',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .addField('ping', 'Pings the bot')
    .setColor(0xff2a68)
    message.channel.send(embed);

  }
}
