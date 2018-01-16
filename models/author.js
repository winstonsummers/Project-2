'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    name: DataTypes.STRING
  }); 
    author.associate = function(models) {
      // associations can be defined here
      //an Author has many books
      author.hasMany(models.book);
  
      
  };
  return author;
};