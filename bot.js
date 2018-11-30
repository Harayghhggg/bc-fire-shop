const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
      console.log('======================================')
      console.log(`by haray`);
      console.log('=======================================')
});
const developers = ["319624924769681412"]
const adminprefix = "f!";
client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!developers.includes(message.author.id)) return;
          
      if (message.content.startsWith(adminprefix + 'pl')) {
              client.user.setGame(argresult);
                message.channel.send(`**Status You   ${argresult}**`)
      } else 
            if (message.content.startsWith(adminprefix + 'wt')) {
                  client.user.setActivity(argresult, {type:'WATCHING'});
                      message.channel.send(`**Status You   ${argresult}**`)
            } else 
                  if (message.content.startsWith(adminprefix + 'ls')) {
                        client.user.setActivity(argresult , {type:'LISTENING'});
                            message.channel.send(`**Status You  ${argresult}**`)
                  } else 
                        if (message.content.startsWith(adminprefix + 'st')) {
                                client.user.setGame(argresult, "https://www.twitch.tv/kokoseda");
                                  message.channel.send(`**Status You ${argresult} **`)
                        }
      if (message.content.startsWith(adminprefix + 'setname')) {
            client.user.setUsername(argresult).then
                message.channel.send(`Changing The Name To ..**${argresult}** `)
      } else
          if (message.content.startsWith(adminprefix + 'setavatar')) {
                client.user.setAvatar(argresult);
                  message.channel.send(`Changing The Avatar To :**${argresult}** `);
          }
});






client.on('message', message => {
    var prefix = "f!";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Boardcast Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args)
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on("message", message => {
          if (message.content === `f!help`) {
                  const embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .setDescription(`**
f!bc | لارسال برودكاست
f!obc | لارسال برودكاست بمنشن 
f!2bc |لارسال برودكاست بعداد
** `)
   
             .setColor('RANDOM')
                  
                  message.channel.sendEmbed(embed)
                   
          }
});
 
 
 client.on("message", message => {
                                var prefix = "f!";
                               if (message.content.startsWith(prefix + "obc")) {
                                                                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                                                   let args = message.content.split(" ").slice(1);
                                                   var argresult = args.join(' '); 
                                                   message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
                                                                      m.send(`${argresult}\n ${m}`);
                                                   })
                                                  message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :   `); 
                                                  message.delete(); 
                               };     
 });
 

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'f!') return;
  let args = message.content.split(' ');
  if(args[0] === `f!2bc`) {
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **       **');
      if(!args[1]) return message.channel.send('- **     **');
   
      let msgCount = 0;
      let errorCount = 0;
      let successCount = 0;
      message.channel.send(`**- [ :bookmark: :: ${msgCount} ]   **\n**- [ :inbox_tray: :: ${successCount} ]   **\n**- [ :outbox_tray: :: ${errorCount} ]   **`).then(msg => {
            message.guild.members.forEach(g => {
                    g.send(args.slice(1).join(' ')).then(() => {
                              successCount++;
                              msgCount++;
                              msg.edit(`**- [ :bookmark: :: ${msgCount} ]   **\n**- [ :inbox_tray: :: ${successCount} ]   **\n**- [ :outbox_tray: :: ${errorCount} ]   **`);
                    }).catch(e => {
                              errorCount++;
                              msgCount++;
                              msg.edit(`**- [ :bookmark: :: ${msgCount} ]   **\n**- [ :inbox_tray: :: ${successCount} ]   **\n**- [ :outbox_tray: :: ${errorCount} ]   **`);
                    });
            });
      });
  }
});
client.on('message', message => {
      var prefix = "f!";
         if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + 'oobc')) {
            if(!message.channel.guild) return message.channel.send('**   **').then(m => m.delete(5000));
            if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
            let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
            let BcList = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setAuthor(` الرسال ${args}`)
            .setDescription(`   ??\n   \n   قبل  `)
            if (!args) return message.reply('**       البرو**');message.channel.send(BcList).then(msg => {
                  msg.react('??')
                  .then(() => msg.react(''))
                  .then(() =>msg.react('??'))
                   
                  let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
                  let NormalBcFilter = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
                   
                  let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
                  let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
                   
                  EmbedBc.on("collect", r => {
                        message.channel.send(`:ballot_box_with_check:  ارس  `).then(m => m.delete(5000));
                        message.guild.members.forEach(m => {
                              var bc = new
                              Discord.RichEmbed()
                              .setColor('RANDOM')
                                .setTitle('`-Broadcast-`')
                              .setAuthor(`Server : ${message.guild.name}`)
                              .setFooter(`Sender : ${message.author.username}`)
                              .setDescription(`Message : ${args}`)
                              .setThumbnail(message.author.avatarURL)
                              m.send({ embed: bc })
                              msg.delete();
                        })
                  })
                  NormalBc.on("collect", r => {
                          message.channel.send(`:ballot_box_with_check:    `).then(m => m.delete(5000));
                        message.guild.members.forEach(m => {
                              m.send(args);
                              msg.delete();
                        })
                  })
            })
      }
});

client.login(process.env.BOT_TOKEN);
