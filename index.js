const { Client, GatewayIntentBits, Events, Collection, IntentsBitField} = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs');
const path = require('node:path');
const { token } = require('./config.json');

// Client creation
const allIntents = new IntentsBitField(7796);
const client = new Client({
    intents : allIntents
});

// Slash commands handler
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders){
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`La commande du chemin ${filePath} est incomplète.`)
        }
    }
};

    // Events
    client.on("ready", () => {
        console.log("Bot ON");

    client.on(Events.InteractionCreate, interaction => {
        console.log(interaction);
    });

    client.on(Events.InteractionCreate, interaction => {
        if (!interaction.isChatInputCommand()) return;
        console.log(interaction);
    });

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`Aucune commande ne correspond à ${interaction.commandName}`);
            return;
        }

        try{
            await command.execute(interaction);
        } catch (error) {
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({content: 'Une erreur a été rencontrée', ephemeral: true});
            } else {
                await interaction.reply({content: 'Une erreur a été rencontrée', ephemeral: true});
            }
        }
    })
});



// Login
client.login(token);