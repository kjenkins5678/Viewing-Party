module.exports = function(sequelize, DataTypes) {
  
  var Club_Member_Map = sequelize.define('club_member_map', {
    linked_at: {
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
    tableName: 'club_member_map'
  });

  Club_Member_Map.associate = function(models) {

    Club_Member_Map.belongsTo(models.Club, {
      foreignKey: {
        allowNull: false
      }
    });

    Club_Member_Map.belongsTo(models.Club_Member, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Club_Member_Map; 
};
