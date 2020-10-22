const express = require('express');
const router = express.Router();
const Songs = require('../models/song');

router.get('/', (req, res) => res.send('This is root!'));

router.delete('/songs/:id', async (req, res) => {
	
});
router.get('/songs', async (req, res) => {

});

router.post('/songs', (req, res) => {
	Songs.create(req.body, (error, newSong) => {
		if (error) console.log(error);
		else res.send(newSong);
	});
});

module.exports = router;
