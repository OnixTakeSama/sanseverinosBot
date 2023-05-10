const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('production')
        .setDescription('Display production timer'),
    async execute(interaction) {

        var today = new Date();
        var hour = today.getHours()+1;
        var hourDisplay;
        if(hour === 24){
            hourDisplay = 0;
        }else{
            hourDisplay = hour;
        }
        var time = String(hourDisplay).padStart(2,'0')+ ":" + String(today.getMinutes()).padStart(2,'0');
        await interaction.reply({content: `⏱ | La production est lancée ! La fournée sera prête à ${time} !`});
    },
}