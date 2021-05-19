const Discord = require("discord.js");
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const client = new Discord.Client();

const channelID = "CHANNELIDHERE"
const token = "BOTTOKENHERE"

client.on("message", function(message) { 
  if(message.channel.id.toString() === channelID)
  {
  console.log(message.author.username.toString() + " says: " + message.content.toString())
  }
});

client.login(token);
