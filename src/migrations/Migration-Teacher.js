'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Teachers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TenGV: {
                type: Sequelize.STRING
            },
            NamSinh: {
                type: Sequelize.DATE
            },
            GioiTinh: {
                type: Sequelize.BOOLEAN
            },
            SoDT: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            id_CV: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Teachers');
    }
};