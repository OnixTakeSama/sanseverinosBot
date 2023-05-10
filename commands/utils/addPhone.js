const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('addphone')
        .setDescription('Add a phone to the phone book')
        .addStringOption(option => option.setName('name').setDescription(`Name`).setRequired(true))
        .addStringOption(option => option.setName('phone').setDescription(`Phone number`).setRequired(true)),

    async execute(interaction){
        await interaction.reply({content:'Annuaire mis à jour !'});

        const name = interaction.options.getString('name');
        const phone = interaction.options.getString('phone');

        axios.post('https://sheetdb.io/api/v1/wmdlggkld0id1',{
            data: {
                name: `${name}`,
                phone: `${phone}`
            }
        })
    }
};