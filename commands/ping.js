const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Pings the bot',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .addDescription('Pong!')
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
