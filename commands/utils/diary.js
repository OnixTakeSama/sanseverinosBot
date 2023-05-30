const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('diary')
        .setDescription('Display the diary'),
    async execute(interaction){
        const response = await axios.get('https://sheetdb.io/api/v1/d1kzhqhkokzf5');

        const lastRow = response.data.pop();

        const diaryEmbed = {
            color: 0x0099ff,
            title: 'Agenda',
            description: 'Prochain rendez-vous',
            fields: [
                {
                    name: '📅 | Date',
                    value: lastRow.date,
                    inline: true,
                },
                {
                    name: '⏲ | Heure',
                    value: lastRow.hour,
                    inline: true,
                },
                {
                    name: '🕵️‍♂️ | Groupe',
                    value: lastRow.group,
                    inline: true,
                },
            ],
        };

        await interaction.reply({ embeds: [diaryEmbed] });
    },
};