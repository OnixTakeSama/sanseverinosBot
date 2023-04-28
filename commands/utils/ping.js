const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Display bot latency'),
    async execute(interaction){
        await interaction.deferReply();

        const reply = await interaction.fetchReply();
        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(`🏓 | La latence du bot est de ${ping} ms.`);
    },
};