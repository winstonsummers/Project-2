'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersBooks = sequelize.define('usersBooks', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersBooks;
};