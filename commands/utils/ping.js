const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Display bot latency'),
    async execute(interaction){
        await interaction.reply({content : `🏓 | La latence est de ${interaction.createdTimestamp - interaction.createdTimestamp} ms.`});
    },
};