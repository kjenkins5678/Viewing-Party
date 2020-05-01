// **********************************************
// **********************************************

module.exports = {
  "host": "localhost",
  "port": "3306",
  "user": "root",
  "password": "testtest",
  "database": "viewing_party_db", 
  "dialect": "mysql",
  "pool": {
    "max": 5,
    "min": 0,
    "acquire": 30000,
    "idle": 10000
  }

}