'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('authors', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //an Author has many books
        models.author.hasMany(models.books);
      }
    }
  });
  return author;
};