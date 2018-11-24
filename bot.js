const Discord = require('discord.js');
const bot19 = new Discord.Client();

bot19.on('ready', () => {
  console.log('Logged in as S19-20-21')
});


bot19.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot19.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot19.on('ready', () => {
  let ch = bot19.guilds.get("507972785650401301").channels.find(c => c.id == "515839504888889354");
  setInterval(function() {
    ch.send("19th Lover")
  }, 900);
});


bot19.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f19"){
    message.channel.send(args.join(" "))
  }
});


bot19.login(process.env.FB19);
////////////////////////
////////////////////////
const bot20 = new Discord.Client();
bot20.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot20.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot20.on('ready', () => {
  let ch = bot20.guilds.get("507972785650401301").channels.find(c => c.id == "515839504888889354");
  setInterval(function() {
    ch.send("20th Lover")
  }, 900);
});


bot20.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f20"){
    message.channel.send(args.join(" "))
  }
});


bot20.login(process.env.FB20);
////////////////////////
////////////////////////
const bot21 = new Discord.Client();
bot21.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot21.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot21.on('ready', () => {
  let ch = bot21.guilds.get("507972785650401301").channels.find(c => c.id == "515839504888889354");
  setInterval(function() {
    ch.send("21th Lover")
  }, 900);
});


bot21.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f21"){
    message.channel.send(args.join(" "))
  }
});


bot21.login(process.env.FB21);
