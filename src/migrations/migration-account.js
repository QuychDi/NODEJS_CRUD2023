'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Account_Systems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Account_name: {
                type: Sequelize.STRING
            },
            Pass: {
                type: Sequelize.STRING
            },
            rePass: {
                type: Sequelize.STRING
            },
            ID_Teacher: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Active: {
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('Account_Systems');
    }
};