const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');

const bot = new Telegraf('1272888227:AAFJxZswd1sCbNm-H3gbh4-12-qYcsUlw4g');

bot.command('start', (ctx) => {
    return ctx.reply('Send me your contact', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                markup.contactRequestButton('Send your contact'),
            ])
    }))
});

bot.on('contact', (ctx) => {
    const contact = ctx.message.contact;
    return ctx.reply(`Hi ${contact.first_name} ${contact.last_name}`);
});

bot.launch();
