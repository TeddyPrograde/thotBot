require('dotenv');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = (process.env.TOKEN);
const PREFIX = "p!";

/* Old Command Handler
const fs = require ('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}*/

//New Command Handler
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const modules = ['info', 'media', 'moderation'];

const fs = require ('fs');
modules.forEach(c => {
  fs.readdir(`./commands/${c}/`, (err, files) => {
    if (err) throw err;
    console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`);

    files.forEach(f => {
      const props = require(`./commands/${c}/${f}`);
      bot.commands.set(props.name, props);

      props.aliases.forEach(alias => {
        client.aliases.set(alias, props.name);
      });
    });
  });
});

//Bot Startup & Status
bot.on('ready', () => {
  console.log('Pooh online');
  bot.user.setActivity('p!help', {type: 'WATCHING'});
});

//Reads Message
bot.on('message', message => {
  if(message.author.bot) return;

  //Prefix Check
  if(!message.content.startsWith(PREFIX)) return;
  let args = message.content.substring(PREFIX.length).split(' ');
  switch (args[0]) {

    //Uncategorized Commands
    case "help":
      bot.commands.get('help').execute(message, args);
    break;

    case "ping":
      bot.commands.get('ping').execute(message, args);
    break;

    //Media Commands
    case "bird":
      bot.commands.get('bird').execute(message, args);
    break;

    case "cat":
      bot.commands.get('cat').execute(message, args);
    break;

    case "dog":
      bot.commands.get('dog').execute(message, args);
    break;

    case "food":
      bot.commands.get('food').execute(message, args);
    break;

    case "meme":
      bot.commands.get('meme').execute(message, args);
    break;

    //Moderation Commands
    case "ban":
      bot.commands.get('ban').execute(message, args);
    break;

    case "kick":
      bot.commands.get('kick').execute(message, args);
    break;
  }
});
bot.login(token);
