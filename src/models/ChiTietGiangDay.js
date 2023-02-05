'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChiTietGD extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ChiTietGD.init({
        Học_Kỳ: DataTypes.INTEGER,
        Nam_Hoc: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ChiTietGD',
    });
    return ChiTietGD;
};