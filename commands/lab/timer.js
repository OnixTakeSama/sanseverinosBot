const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('timer')
        .setDescription('Display lab timer'),
    async execute(interaction){

    },
};