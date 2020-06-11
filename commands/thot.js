const Discord = require('discord.js');

module.exports = {
  name: 'thot',
  description: 'Sends thot image (no prefix required)',
  execute(message){

    const embed = new Discord.MessageEmbed()
    .setColor(0xed2d5d)
    .setTitle(':rotating_light: Thot Detected :rotating_light:')
    .setImage('https://imgur.com/LFoco6g.jpg')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
