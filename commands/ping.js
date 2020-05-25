module.exports = {
  name: 'ping',
  description: 'Pings and checks latency of the bot',
  execute(message, args){

    const embed = new Discord.MessageEmbed()
    .addField('Pong!')
    .setColor(0xff2a68)
    message.channel.send(embed);

  }
}
