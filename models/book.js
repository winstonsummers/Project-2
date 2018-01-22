'use strict';
module.exports = (sequelize, DataTypes) => {
  var book = sequelize.define('book', {
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    coverurl: DataTypes.STRING,
    isbn: DataTypes.INTEGER
  });

  book.associate = function(models) {
    // book.belongsTo()
    //a book belongs to an author
    book.belongsTo(models.author);
    // //a book belongs to many users
    book.belongsToMany(models.user, {through: models.usersBooks});
  }

  return book;
};