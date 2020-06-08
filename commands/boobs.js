const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'boobs',
  description: 'Grabs random boob content',
  execute(message, args){

    let reddit = [
      "boobs",
      "BigBoobsGW",
      "FlashingGirls",
      "hugeboobs",
      "boobgifs",
      "cleavage",
      "BoobsBetweenArms",
      "Nude_Selfie"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit)
      .then(url => {
        const embed = new Discord.MessageEmbed()
        .setURL(url)
        .setImage(url)
        .setColor(0xff2a68)
        .setTimestamp()
        .setFooter(message.member.user.tag)
        message.channel.send(embed);
      })
  }
}
