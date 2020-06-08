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
    event.on({}

    const embed = new Discord.MessageEmbed()
    .setImage(url)
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

   )
  }
}
