'use strict';
module.exports = (sequelize, DataTypes) => {
  var userFriends = sequelize.define('userFriends', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userFriends;
};