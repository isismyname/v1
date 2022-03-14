'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser"
        }
      })
    }
  }
  transaction.init({
    idUser: DataTypes.INTEGER,
    image: DataTypes.STRING,
    remainingactive: DataTypes.STRING,
    userstatus: DataTypes.STRING,
    paymentstatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};