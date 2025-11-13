// index.js
const { Client, GatewayIntentBits, Events } = require("discord.js");

const TOKEN = "";  // 🔑 schimbă cu tokenul tău
const PREFIX = "!";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.reply("🏓 Pong!");
  }
  else if (command === "hello") {
    message.reply(`👋 Hello, ${message.author.username}!`);
  }
  else if (command === "help") {
    message.reply("🧠 Commands:\n`!ping` - Pong!\n`!hello` - Greet you\n`!help` - Show this message");
  }
});

client.login(TOKEN);
