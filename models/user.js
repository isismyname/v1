'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.listbook, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    role: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};