const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', 
  database: 'viewing_party_db'
});
//console.log (connection); 

module.exports = connection; 


