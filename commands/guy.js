const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'guy',
  description: 'Grabs random NSFW guy content',
  execute(message, args){

    let reddit = [
      "TotallyStraight",
      "ladybonersgw",
      "DickPics4Freedom",
      "ratemycock",
      "MassiveCock",
      "penis",
      "cock",
      "twinks",
      "hotguyswithtattoos"
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
