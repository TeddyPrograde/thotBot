const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'shows all commands',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .addField('ping', 'Pings thotBot')
    .setColor(0xff2a68)
    message.channel.sendEmbed(embed);

  }
}
