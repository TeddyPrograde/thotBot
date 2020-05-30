const Discord = require('discord.js');

module.exports = {
  name: 'megathot',
  description: 'Sends mega thot image (no prefix required)',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setImage('https://imgur.com/4mjc1fX.jpg')
    message.channel.send(embed);

  }
}
