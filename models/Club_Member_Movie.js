module.exports = function(sequelize, DataTypes) {

  var Club_Member_Movie = sequelize.define('club_member_movie', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movie_status: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    tmdb_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    poster_url: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    reviews_url: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    fk_club_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'club',
        key: 'id'
      }
    }, 
    fk_member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'club_member',
        key: 'id'
      }
    } 
  }, {
    tableName: 'club_member_movie'
  });

  Club_Member_Movie.associate = function(models) {

    Club_Member_Movie.hasMany(models.Club_Member_Movie_Comment, {
      onDelete: "cascade"
    });

    Club_Member_Movie.belongsTo(models.Club, {
      foreignKey: {
        allowNull: false
      }
    });

    Club_Member_Movie.belongsTo(models.Club_Member, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Club_Member_Movie; 
};
