'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ChiTietGD', {
            idLop: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idGV: {
                type: Sequelize.INTEGER
            },
            Học_Kỳ: {
                type: Sequelize.INTEGER
            },
            Nam_Hoc: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ChiTietGD');
    }
};