// require connection to database
const mongoose = require(".../db/connection")

// song's Schema setup with Title, time, artist
const songSchema = new mongoose.Schema({

    const songSchema = new mongoose.Schema(
        {
            title: { type: String, required: true },
            time: { type: String, required: true },
            artist: { type: String, required: true},
        }
    )
})

// model export
const Song = mongoose.model("Song", songSchema)

module.exports = Song;