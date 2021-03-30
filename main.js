const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Infestecheats is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'buyrust'){
        message.channel.send('https://shoppy.gg/product/fVd4VgT 1 WEEK https://shoppy.gg/product/n13MTtw 1 MONTH' );
    } else if(command === 'buyfortnite'){
        message.channel.send('https://shoppy.gg/product/NnMclCZ 1 WEEK https://shoppy.gg/product/866XsBQ 1 MONTH' );
    } else if(command === 'buypubg'){
        message.channel.send('https://shoppy.gg/product/5xTz3wQ 1 WEEK https://shoppy.gg/product/1iJNeP7 1 MONTH' );
    } else if(command === 'buyallinone'){
        message.channel.send('https://shoppy.gg/product/QiOv7bG 3 MONTHS https://shoppy.gg/product/dOBTX9J 1 YEAR' );
    }   
});




client.login('ODI2Mzc4ODI2NTQzMzk4OTYz.YGLnQQ.o6CwAlvDiMK3vE4e3aTyQCNtwZw');
