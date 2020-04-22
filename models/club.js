// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  
  var Club = sequelize.define('club', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    club_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'club'
  });

  Club.associate = function(models) {

    Club.hasMany(models.Club_Member_Map, {
      onDelete: "cascade"
    });

    Club.hasMany(models.Club_Member_Movie, {
      onDelete: "cascade"
    });

    Club.hasMany(models.Club_Member_Movie_Comment, {
      onDelete: "cascade"
    });

    Club.hasMany(models.Club_Comment, {
      onDelete: "cascade"
    });

  };

  return Club; 
};

