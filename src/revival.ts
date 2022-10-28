import { Client, EmbedBuilder, Message, TextChannel } from "discord.js";
import {log} from "./Events/log"
const client = new Client({
  intents: [38783],
});
const config = require("../config.json");
const prefix = config.prefix;

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}(${client?.user?.id})!`);
});

client.on("messageCreate", (message) => {
  const guild = client.guilds.cache.get(config.guild);
  const messageLogChannel = client.channels.cache.get(
    config.messageLogChannel
  ) as TextChannel;
  if (
    message.author.id == client.user?.id ||
    message.channel.id == messageLogChannel?.id ||
    message.author.bot
  )return;
  
  log(message);
});

client.login(config.token);
