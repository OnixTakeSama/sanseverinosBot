const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('setstock')
        .setDescription('Set the lab stock')
        .addStringOption(option => option.setName('acide').setDescription(`Acid count`).setRequired(true))
        .addStringOption(option => option.setName('graines').setDescription(`Seed count`).setRequired(true))
        .addStringOption(option => option.setName('coke').setDescription(`Coke count`).setRequired(true)),
    async execute(interaction){
        await interaction.reply({content:"Stock mis à jour"});

        const acide = interaction.options.getString('acide');
        const graines = interaction.options.getString('graines');
        const coke = interaction.options.getString('coke');
        userID = interaction.user.id;

        axios.post('https://sheetdb.io/api/v1/3v425scd03u1p',{
            data: {
                    acide: `${acide}`,
                    graines: `${graines}`,
                    coke: `${coke}`,
                    user: `${userID}`
                }
            })
        }
};