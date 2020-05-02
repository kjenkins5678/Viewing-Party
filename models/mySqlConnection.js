const mysql = require('mysql2');
var connection; 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql000!', 
    database: 'viewing_party_db'
});

module.exports = connection; 
