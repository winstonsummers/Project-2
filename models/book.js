'use strict';
module.exports = (sequelize, DataTypes) => {
  var book = sequelize.define('books', {
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    coverurl: DataTypes.STRING,
    isbn: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //a book belongs to an author
        models.book.belongsTo(models.author);
        //a book belongs to many users
        models.book.belongsToMany(models.user, {through: 'usersBooks'});
      }
    }
  });
  return book;
};