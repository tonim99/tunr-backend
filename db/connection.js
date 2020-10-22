// db into connection.js
const mongoose = require('mongoose');

// mongoDB URI empty? what should i add in here
let MONGODB_URI = 'http://localhost:3000/';

if (process.env.NODE_ENV === 'production') {
	// use HEROKU to connect to MONGODB
	MONGODB_URI = process.env.DB_URL;
} else {
    // double check what to put in URI
	MONGODB_URI = 'http://localhost:3000/';
}

mongoose
    // make sure connections here work.
	.connect(MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Connects to MONGO!!');
    })
    
    // double check this for me
	.catch((e) => {
		console.error('Error connecting:', error);
	});

module.exports = mongoose;
