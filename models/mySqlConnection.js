const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'testtest', 
  database: 'viewing_party_db'
});
//console.log (connection); 

module.exports = connection; 


