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

db.club = require("./club.js")(sequelize, Sequelize);
db.club_member = require("./club_member.js")(sequelize, Sequelize);
db.club_member_movie = require("./club_member_movie.js")(sequelize, Sequelize);
db.club_member_movie_comment = require("./club_member_movie_comment.js")(sequelize, Sequelize);
db.club_member_map = require("./club_member_map.js")(sequelize, Sequelize);
db.club_comment = require("./club_comment.js")(sequelize, Sequelize);

module.exports = db;