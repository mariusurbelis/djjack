const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "NDM1ODg5MTIwMDg3MjQ0ODAx.DblfJw.ydII40xSyRItulULFQFU6pqnJnY" // Recommended to load from json file.

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
	prefix: '-',       // Prefix of '-'.
	global: false,     // Server-specific queues.
	maxQueueSize: 10,  // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'   // Name of voice channel to join. If omitted, will instead join user's voice channel.
});
Bot.login(token);
