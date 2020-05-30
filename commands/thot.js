const Discord = require('discord.js');

module.exports = {
  name: 'thot',
  description: 'Sends thot image (no prefix required)',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setImage('https://imgur.com/LFoco6g.jpg')
    message.channel.send(embed);

  }
}
