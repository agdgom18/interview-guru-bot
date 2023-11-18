import { Bot } from 'grammy';
import * as dotenv from 'dotenv';
dotenv.config();
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.SECRET_KEY ?? ''); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command('start', (ctx) => {
  console.log(ctx);
});

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
