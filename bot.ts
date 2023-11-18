import { Bot, Keyboard, GrammyError, HttpError } from 'grammy';
import * as dotenv from 'dotenv';
dotenv.config();

const bot = new Bot(process.env.SECRET_KEY ?? '');

// Handle the /start command.
bot.command('start', async (ctx) => {
  const startKeyboard = new Keyboard().text('HTML').text('CSS').row().text('JavaScript').text('React').resized();
  await ctx.reply(
    'Greetings, frontend developer!\nWelcome to Interview Guru Bot - your trusted assistant in preparing for an interview for a frontend position.',
  );
  // show keyboard
  await ctx.reply('Choose theme', {
    reply_markup: startKeyboard,
  });
});

bot.hears(['HTML', 'CSS', 'JavaScript', 'React'], async (ctx) => {
  await ctx.reply(`What is ${ctx.message?.text}?`);
});
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});
// Start the bot.
bot.start();
