const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: 'anal',
  description: 'Grabs random anal content',
  execute(message, args){
    if(message.channel.nsfw === false){
      message.channel.send("This channel does now allow NSFW content")
      return;
    }

      let reddit = [
        "anal",
        "AnalOrgasms",
        "AnalGW",
        "anal_gifs",
        "painal",
        "Roughanal",
        "analgonewild"
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
    )}
  }
}
