const db = require('../config/db');

const music = {
    create: (data, callback) => {
        const query = "insert into ecf_spotify(name, artist, music,  genre, lyrics) values (?,?,?,?,?)";
        db.query (query, [data.name, data.artist, data.music, data.genre, data.lyrics ], callback);
    }
}

module.exports = music;