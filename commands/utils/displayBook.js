const { SlashCommandBuilder} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('displaybook')
        .setDescription('Display phone book'),
    async execute(interaction) {
        try {
            const response = await axios.get('https://sheetdb.io/api/v1/wmdlggkld0id1');
            const data = JSON.parse(response.data);
            const embed = new EmbedBuilder()
                .setTitle('Annuaire Sanseverinos  🐍')
                .setColor(0x0099ff);

            if (data.length === 0) {
                await interaction.reply({content: 'L\'annuaire de contient aucun numéro'});
            } else {
                for (const item of data) {
                    embed.addFields(item.name, item.phone);
                }
                await interaction.reply({embeds: [embed] });
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({content : 'Une erreur est survenue lors de l\'affichage de l\'annuaire'});
        }
    },
};