const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
// const songsController = require('./controllers/songsController');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// app.use('/api', songsController);
// app.use("/tunr", tunrRouter)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
