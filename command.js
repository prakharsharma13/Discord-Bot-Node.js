import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1323251458107244574"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
