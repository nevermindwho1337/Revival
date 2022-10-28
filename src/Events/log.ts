import { Client, EmbedBuilder, Message, TextChannel } from "discord.js";

const client = new Client({
    intents: [38783],
});

const config = require("../../config.json");
export function log(message:Message){

const messageLogChannel = client.channels.cache.get(
    config.messageLogChannel
  ) as TextChannel;

const logEmbed = new EmbedBuilder()
    .setTitle("**Message Sent :**")
    .addFields({
      name: `${message.author.tag}(${message.author.id}):`,
      value: `${message.content}`,
    },
    {
      name: "**Sent in:**",
      value: `${message.channel}`
    }
    )
    .setThumbnail(
      "https://raw.githubusercontent.com/nevermindwho1337/nevermindwho1337/main/images/pfp.jpg"
    )
    .setColor("#AA0000")
    .setTimestamp()
    .setFooter({ text: "made by nevermindwho1337" });
  messageLogChannel?.send({ embeds: [logEmbed] });
}