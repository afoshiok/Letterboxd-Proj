import { SlashCommandBuilder } from "discord.js";
import { Command } from "../types/Command";

export const HelloCommand = new SlashCommandBuilder()
    .setName('Hello')
    .setDescription('Returns a "hi!"')

    //Will come back to this later. Ref: https://github.com/discordjs/discord.js/blob/main/packages/builders/docs/examples/Slash%20Command%20Builders.md