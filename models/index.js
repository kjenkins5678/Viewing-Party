const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Club = require("./Club.js")(sequelize, Sequelize);
db.Club_Member = require("./Club_Member.js")(sequelize, Sequelize);
db.Club_Member_Movie = require("./Club_Member_Movie.js")(sequelize, Sequelize);
db.Club_Member_Movie_Comment = require("./Club_Member_Movie_Comment.js")(sequelize, Sequelize);
db.Club_Member_Map = require("./Club_Member_Map.js")(sequelize, Sequelize);
db.Club_Comment = require("./Club_Comment.js")(sequelize, Sequelize);
db.mySqlConnection = require ("./mySqlConnection.js");

module.exports = db;