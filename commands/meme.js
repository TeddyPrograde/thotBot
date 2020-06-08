const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'meme',
  description: 'Grabs random meme content',
  execute(message, args){

    let reddit = [
      "MemeEconomy",
      "BikiniBottomTwitter",
      "HistoryMemes",
      "dankmemes",
      "memes",
      "discord_irl",
      "me_irl"
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
