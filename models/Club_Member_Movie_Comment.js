module.exports = function(sequelize, DataTypes) {
  
  var Club_Member_Movie_Comment = sequelize.define('club_member_movie_comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(1024),
      allowNull: true
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
    }, 
    fk_movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'club_member_movie',
        key: 'id'
      }
    } 
  }, {
    tableName: 'club_member_movie_comment'
  });

  Club_Member_Movie_Comment.associate = function(models) {

    Club_Member_Movie_Comment.belongsTo(models.Club, {
      foreignKey: {
        allowNull: false
      }
    });

    Club_Member_Movie_Comment.belongsTo(models.Club_Member, {
      foreignKey: {
        allowNull: false
      }
    });

    Club_Member_Movie_Comment.belongsTo(models.Club_Member_Movie, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Club_Member_Movie_Comment; 
};

