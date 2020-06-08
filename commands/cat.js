const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'cat',
  description: 'Grabs random cat picture',
  execute async (message, args){

    let reddit = [
      "cats",
      "catbellies"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    const embed = new Discord.MessageEmbed()
    .setImage(
      randomPuppy(subreddit).then(async url => {
        await message.channel.send({
          files: [{
            attachment: url,
            name: 'meme.png'
          }]
      })
    }))
    .setColor(0xff2a68)
    .setTimestamp()
    .setFooter(message.member.user.tag)
    message.channel.send(embed);

  }
}
