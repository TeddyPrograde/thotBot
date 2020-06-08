const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'meme',
  description: 'Grabs random meme',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
