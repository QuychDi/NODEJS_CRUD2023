'use strict';
const {
    Model
} = require('sequelize');
const Teacher = require('./Teacher');
module.exports = (sequelize, DataTypes) => {
    class Account_Systems extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Account_Systems.belongsTo(models.Teacher, {
                as: 'id_gv',
                foreignKey: {
                    name: 'ID_Teacher',
                    allowNull: false
                }
            })
            // define association here
        }
    }
    Account_Systems.init({
        Account_name: DataTypes.STRING,
        Pass: DataTypes.STRING,
        rePass: DataTypes.STRING,
        ID_Teacher: DataTypes.INTEGER,
        Active: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Account_Systems',
    });

    return Account_Systems;
};