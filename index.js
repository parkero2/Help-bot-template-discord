const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

if (config.bottoken == "yourtokenhere"){
  console.log("Please use your discord bot's token (obtainable from https://discord.com/developers)");
}
else {
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', msg => {
    if (msg.content.contains(config.prefix) && msg.content[0] == config.prefix[0]){
      if (msg.content.toUpperCase().includes("SET")){
        if (msg.member.hasPermission(config.editorperms)){
          for(var x=0; x<msg.content.length-config.prefix.length-4; x++) {
            if (msg.content[x] != "|"){
              var inducer = inducer.concact(msg.content[x]);
            }
            else {
              break;
            }
          }
          for (x=0; x<msg.content.length-config.prefix.length-4-inducer.length; x++){
            var resp = resp.concact(msg.content[x]);
          }
          var data = inducer + " : " + resp;
          config.responses.data = data;
        }
      }
      else {
        for (x=0; x = msg.content.length - 1 - config.prefix; x++){
          var arg1 = arg1.concact(msg.content[x]);
        }
        if (arg1.toLowercase() in config.responses){
          msg.channel.send(config.responses.arg1.toLowercase());
        }
        else {
          msg.channel.send("Hmm, this response does not exist. Contact an admin if this is in error!");
        }
      }
    }
  });

  client.login(config.bottoken);
}