const { SlashCommandBuilder, Embed} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('displaybook')
        .setDescription('Display phone book'),
    async execute(interaction) {
        try {
            const response = await axios.get('https://sheetdb.io/api/v1/wmdlggkld0id1',{
                headers: {
                    Accept: 'application/json'
                }
            });
            const data = response.data;

            if (data.length === 0) {
                await interaction.reply('Le Google Sheet est vide.');
                return;
            }

            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Données du Google Sheet')
                .setDescription('Liste des données :');

            const columns = Object.keys(data[0]);
            console.log(response.data);
            for (const entry of data) {
                const fieldString = columns
                    .map(column => `**${column}:** ${entry[column]}`)
                    .join('\n');
                embed.addFields('\u200B', fieldString);
            }

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la récupération des données du Google Sheet.');
        }
    },
};