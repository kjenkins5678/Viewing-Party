let bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {

  var Club_Member = sequelize.define('club_member', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(4096),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'club_member'
  });

  Club_Member.associate = function(models) {

    Club_Member.hasMany(models.Club_Member_Map, {
      onDelete: "cascade"
    });

    Club_Member.hasMany(models.Club_Member_Movie, {
      onDelete: "cascade"
    });

    Club_Member.hasMany(models.Club_Member_Movie_Comment, {
      onDelete: "cascade"
    });

    Club_Member.hasMany(models.Club_Comment, {
      onDelete: "cascade"
    });

  };

  // Club_Member.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  
  // Club_Member.addHook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  return Club_Member; 
};
