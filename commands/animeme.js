const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'animeme',
  description: 'Grabs random animeme',
  execute(message, args){

    let reddit = [
      "Animemes",
      "AnimemeEconomy",
      "animememes",
      "animeme"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit)
      .then(url => {
        const embed = new Discord.MessageEmbed()
        .setURL(url)
        .setImage(url)
        .setColor(0x0b6bf0)
        .setTimestamp()
        .setFooter(message.member.user.tag)
        message.channel.send(embed);
      })
  }
}
