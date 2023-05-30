const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('addmeeting')
        .setDescription('Add a meeting to the diary')
        .addStringOption(option => option.setName('date').setDescription(`Date`).setRequired(true))
        .addStringOption(option => option.setName('hour').setDescription(`Hour`).setRequired(true))
        .addStringOption(option => option.setName('group').setDescription(`Group`).setRequired(true)),

    async execute(interaction){
        await interaction.reply({content:'Agenda mis à jour !'});

        const date = interaction.options.getString('date');
        const hour = interaction.options.getString('hour');
        const group = interaction.options.getString('group');

        axios.post('https://sheetdb.io/api/v1/d1kzhqhkokzf5',{
            data: {
                date: `${date}`,
                hour: `${hour}`,
                group: `${group}`
            }
        })
    }
};