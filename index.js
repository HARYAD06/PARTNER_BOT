const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '#wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من نایێم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`لینکی سێرڤەر https://discord.gg/6C3XWMyYFq  `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("779644158087397407").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGam(`ڕیکلام لەمنەوە`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzkyMzgyNzA0OTkzNjk3ODIz.X-c55g.5IGYamig6JjMnzwinX_rKAnfTo0");//تۆکین لێرە دانێ
