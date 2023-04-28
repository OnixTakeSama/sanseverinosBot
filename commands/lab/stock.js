const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('stock')
        .setDescription('Display the lab stock'),
    async execute(interaction){
        const response = await axios.get('https://sheetdb.io/api/v1/3v425scd03u1p');

        const lastRow = response.data.pop();

        const stockEmbed = {
            color: 0x0099ff,
            title: 'Stock',
            fields: [
                {
                    name: '⛽ | Acide',
                    value: lastRow.acide,
                    inline: true,
                },
                {
                    name: '🌱 | Graines',
                    value: lastRow.graines,
                    inline: true,
                },
                {
                    name: '💊 | Coke',
                    value: lastRow.coke,
                    inline: true,
                },
            ],
        };

        await interaction.reply({ embeds: [stockEmbed] });
    },
};