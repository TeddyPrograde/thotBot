const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'sex',
  description: 'Grabs random sex content',
  execute(message, args){

    let reddit = [
      "holdthemoan",
      "gonewild",
      "porninfifteenseconds",
      "porn",
      "NSFW_GIF",
      "pornvids",
      "porn_gifs",
      "The_Best_NSFW_GIFS"
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
