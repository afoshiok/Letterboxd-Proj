import {  CommandInteraction, Client  } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: 1, //Types are integers with 1 = CHAT_INPUT, 2 = USER, and 3 = MESSAGE. See https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};