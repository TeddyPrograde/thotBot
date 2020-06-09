const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Kicks mentioned user',
  execute(message, args){

    const user = message.mentions.users.first();

    if(user){
      const member = message.guild.member(user);

      if(member){
        member.kick().then(() =>{
          message.channel.send(`${user.tag} has been kicked`);
        }).catch(err =>{
          message.reply('An error has occured, please try again');
          console.log(err);
        });
      } else {
        message.channel.send('This user is not in the server')
      }
    } else {
      message.channel.send('Please mention who you want to kick')
    }
  }
}
