const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'bird',
  description: 'Grabs random bird content',
  execute(message, args){

    let reddit = [
      "birds",
      "birdswitharms",
      "parrots",
      "birding",
      "birdpics",
      "DivorcedBirds",
      "BirdsBeingDicks"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit)
      .then(url => {
        const embed = new Discord.MessageEmbed()
        .setURL(url)
        .setImage(url)
        .setColor(0xed2d5d)
        .setTimestamp()
        .setFooter(message.member.user.tag)
        message.channel.send(embed);
      })
  }
}
