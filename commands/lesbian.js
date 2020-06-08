const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'lesbian',
  description: 'Grabs random lesbian content',
  execute(message, args){

    let reddit = [
      "scissoring",
      "dykesgonewild",
      "girlskissing",
      "lesbians",
      "dyke",
      "Lesbian_gifs"
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
