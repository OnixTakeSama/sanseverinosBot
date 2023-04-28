const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('production')
        .setDescription('Display production timer'),
    async execute(interaction){

        await interaction.reply({content: "⏱ | La production est lancée !"});

        const productionTime = 60 * 60 * 1000;

        setTimeout(() => {
            interaction.followUp({content: "⏱ | La production est terminée !"});
        }, productionTime);
    },
};