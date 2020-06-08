const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'dog',
  description: 'Grabs random dog picture',
  execute(message, args){

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    const embed = new Discord.MessageEmbed()
    .setImage(body.url)
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
