import {  CommandInteraction, Client, CacheType } from "discord.js";
import { Command } from "../Command";
import { LetterboxdData } from "src/Webscraper";

export const Films: Command = {
    name: "films",
    description: "Show your previous 50 films logged on your Letterboxd diary.",
    type: 1,
    options: [{
        name: 'LetterboxUser',
        description: 'Show your last 50 movies logged in your Letterboxd diary.',
        type: 3,
        required: true
    }],
    run: async (client: Client, interaction: CommandInteraction) => {
        const username = interaction.options.getString('LetterboxdUser')
        const result = LetterboxdData(username)

        await interaction.followUp({
            ephemeral: true,
            result
        })
    }
}