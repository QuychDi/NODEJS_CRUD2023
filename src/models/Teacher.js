'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Teacher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Teacher.belongsTo(models.Account_Systems)
        }
    }
    Teacher.init({
        TenGV: DataTypes.STRING,
        NamSinh: DataTypes.DATE,
        GioiTinh: DataTypes.BOOLEAN,
        SoDT: DataTypes.STRING,
        image: DataTypes.STRING,
        id_CV: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Teacher',
    });
    return Teacher;
};