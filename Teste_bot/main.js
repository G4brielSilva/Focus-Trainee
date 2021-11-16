function send()
{
    var msg = document.getElementById('input').value;
    alert(msg);
    const BOT_TOKEN = "2118393099:AAHNp3T4KLNzNySB-EsXB9QCqupj9O5aoao";
    const CHAT_ID = "1895287593";
    const { Telegraf } = require('telegraf')
    
    const bot = new Telegraf(BOT_TOKEN);
    bot.telegram.sendMessage(CHAT_ID, 'Hello Telegram!');
}