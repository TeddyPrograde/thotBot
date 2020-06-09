const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans mentioned user',
  execute(message, args){

    if(!message.member.permissions.has("BAN_MEMBERS")) {
      const noPermissionsMessage = new Discord.MessageEmbed()
      .setColor(0xf53838)
      .setDescription('You may not ban members')
      message.channel.send(noPermissionsMessage);
    } else {
      const user = message.mentions.users.first();

      if(user){
        const member = message.guild.member(user);

        if(member){
          member.ban().then(() =>{
            const successMessage = new Discord.MessageEmbed()
            .setColor(0x26ff64)
            .setTitle(`${user.tag} has been banned`)
            .setTimestamp()
            .setFooter(message.member.user.tag)
            message.channel.send(successMessage);

          }).catch(err =>{
            const errorMessage = new Discord.MessageEmbed()
            .setColor(0xf53838)
            .setDescription('An error has occured, please try again')
            message.channel.send(errorMessage)
            console.log(err);

          });
        } else {
          const noUserMessage = new Discord.MessageEmbed()
          .setColor(0xf2d027)
          .setDescription('This user is not in the server')
          message.channel.send(noUserMessage);

        }
      } else {
        const noMentionMessage = new Discord.MessageEmbed()
        .setColor(0xf2d027)
        .setDescription('Please mention who you want to ban')
        message.channel.send(noMentionMessage);
      }
    }
  }
}
