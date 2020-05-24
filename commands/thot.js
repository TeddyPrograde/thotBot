module.exports = {
  name: 'thot',
  description: 'thot image test',
  execute(message, args){

    message.channel.send({files: ["https://imgur.com/a/SzwP8tb.jpg"]});

  }
}
