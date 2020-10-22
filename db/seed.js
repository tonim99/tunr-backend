const mongoose = require('./connection.js');
const db = mongoose.connection;
const Song = require('../models/song');

db.on('error', console.error.bind(console, 'connections ERROR:'));

const main = async () => {
	await Song.deleteMany({});

	const songs = [
        { title: 'Shelter', 
        time: '3:01', 
        artist: 'Porter Robinson' 
        },

	];

	await Song.insertMany(songs);
	console.log('Created some songs!');
};
const run = async () => {
	await main();
	db.close();
};

run();
