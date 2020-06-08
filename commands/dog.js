const Discord = require('discord.js');

module.exports = {
  name: 'dog',
  description: 'Grabs random dog picture',
  execute(message, args){

    const embed = new Discord.MessageEmbed()

    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
