module.exports = function(sequelize, DataTypes) {

  var Club_Comment = sequelize.define('club_comment', {
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
    } 
  }, {
    tableName: 'club_comment'
  });

  Club_Comment.associate = function(models) {

    Club_Comment.belongsTo(models.Club, {
      foreignKey: {
        allowNull: false
      }
    });

    Club_Comment.belongsTo(models.Club_Member, {
      foreignKey: {
        allowNull: false
      }
    });

  }

  return Club_Comment; 
};

