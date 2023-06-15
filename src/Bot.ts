import { Client, Events, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'

import { LetterboxdData } from "./webScraper";


const token = process.env.TOKEN

const client = new Client({ intents: [[GatewayIntentBits.Guilds]]})

client.on('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(token)

// LetterboxdData("FavourOshio")