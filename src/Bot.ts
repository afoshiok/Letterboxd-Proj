import { Client, ClientOptions } from "discord.js"
import interactionCreate from "./listeners/interactionCreate"
import ready from "./listeners/ready"
require('dotenv').config()

const token = process.env.TOKEN

console.log("Bot is starting...")

const client = new Client({
    intents: [] //FIXME: Look into Guilds
})

interactionCreate(client)
ready(client)


client.login(token)
// console.log(client)