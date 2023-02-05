'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    ethnic: DataTypes.STRING,
    born: DataTypes.STRING,
    // MOTHER
    fullname_mo: DataTypes.STRING,
    birthday_mo: DataTypes.DATE,
    job_mo: DataTypes.STRING,
    address_connect_mo: DataTypes.STRING,
    phonenumber_mo: DataTypes.STRING,
    // FATHER
    fullname_fa: DataTypes.STRING,
    birthday_fa: DataTypes.DATE,
    job_fa: DataTypes.STRING,
    address_connect_fa: DataTypes.STRING,
    phonenumber_fa: DataTypes.STRING,
    // ROLID
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};