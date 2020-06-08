const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows all commands',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setAuthor('thotBot', 'https://imgur.com/CB81zbW.jpg')
    .setTitle('Commands')
    .addField('ping', 'Pings the bot')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

    const embed2 = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setAuthor('thotBot', 'https://imgur.com/CB81zbW.jpg')
    .setTitle('Moderation')
    .addField('WIP', 'Development of moderation commands is in progress, please be patient.')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed2);

  }
}
