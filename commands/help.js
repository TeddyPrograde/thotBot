const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows all commands',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setAuthor('thotBot', 'https://imgur.com/CB81zbW.jpg')
    .setTitle('Commands')
    .addField('animeme', 'Gets a random anime meme')
    .addField('bird', 'Shows random birb')
    .addField('cat', 'Shows random kitty')
    .addField('dog', 'Shows random doggo')
    .addField('food', 'Presents tasty dishes')
    .addField('meme', 'Gets a random meme')
    .addField('ping', 'Pings the bot')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

    const embed2 = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setAuthor('thotBot', 'https://imgur.com/CB81zbW.jpg')
    .setTitle('NSFW | Must be in NSFW enabled channel')
    .addField('anal', 'Gets random anal content')
    .addField('ass', 'Shows a nice booty')
    .addField('bdsm', 'Gets random BDSM content')
    .addField('blowjob', 'Gets random blowjob content')
    .addField('boobs', 'Shows some nice titties')
    .addField('dick', 'Shows a nice cock')
    .addField('gay', 'Gets random gay content')
    .addField('girl', 'Shows a sexy lady')
    .addField('guy', 'Shows a sexy man')
    .addField('hentai', 'Gets random hentai content')
    .addField('lesbian', 'Gets random lesbian content')
    .addField('pussy', 'Shows some nice coochie')
    .addField('r34', 'Gets random rule 34 content')
    .addField('sex', 'Gets random NSFW content')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed2);

    const embed3 = new Discord.MessageEmbed()
    .setColor(0xff2a68)
    .setAuthor('thotBot', 'https://imgur.com/CB81zbW.jpg')
    .setTitle('Moderation | Must have permissions')
    .addField('kick', 'Kicks mentioned user')
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed3);

  }
}
