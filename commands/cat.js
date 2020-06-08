const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'cat',
  description: 'Grabs random cat picture',
  execute(message, args){

    let reddit = [
      "cats",
      "catbellies"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    const event = randomPuppy.all(subreddit);

    const embed = new Discord.MessageEmbed()
    event.on('data', url => .setImage(url, ".png"))
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);
  }
}
