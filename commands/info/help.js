const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows all commands',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setColor(0xf1bd25)
    .setAuthor('Pooh', 'https://imgur.com/eRkZMXW.jpg')
    .setTitle('Commands')
    .addField('bird', 'Shows random birb')
    .addField('cat', 'Shows random kitty')
    .addField('dog', 'Shows random doggo')
    .addField('food', 'Presents tasty dishes')
    .addField('meme', 'Gets a random meme')
    .addField('ping', 'Pings the bot')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

    if(message.member.permissions.has("BAN_MEMBERS" || "KICK_MEMBERS")) {
      const embed2 = new Discord.MessageEmbed()
      .setColor(0xf1bd25)
      .setAuthor('Pooh', 'https://imgur.com/eRkZMXW.jpg')
      .setTitle('Moderation | Must have permissions')
      .addField('ban', 'Bans mentioned user')
      .addField('kick', 'Kicks mentioned user')
      .setTimestamp()
      .setFooter(message.member.user.tag)
      message.channel.send(embed2);
    } else {
      return;
    }
  }
}
