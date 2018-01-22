'use strict';
var bcrypt=require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 32],
          msg: 'Password need to be between 6 and 32 characters.'
        }
      }
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          msg: 'Invalid email address format.'
        }
      }
    },
    imgurl:{
      type: DataTypes.STRING,
      validate:{
        isUrl:{
          msg: 'Not a working Url, try again.'
        }
      }
    }
  },
  {
    hooks:{
      beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash=bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password=hash;
        }
      }
    }
  });

  user.associate = function(models) {
    // associations can be defined here
    //a user has many books
    user.belongsToMany(models.book, {through: models.usersBooks});
    //users belong to many users as friends?
    user.belongsToMany(models.user, {as: 'friends', through: models.userFriends});
  };

  user.prototype.isValidPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password);
  }
  user.prototype.toJSON = function(){
    var user=this.get();
    delete user.password;
    return user;
  }

  return user;
};















