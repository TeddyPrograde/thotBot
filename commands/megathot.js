const Discord = require('discord.js');

module.exports = {
  name: 'megathot',
  description: 'Sends mega thot image (no prefix required)',
  execute(message){

    const embed = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setTitle(':rotating_light: Thot Detected')
    .setImage('https://imgur.com/4mjc1fX.jpg')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
