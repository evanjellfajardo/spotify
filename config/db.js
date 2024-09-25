const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'spotify_vangel'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to MYSQL Database.');
});

module.exports = db;