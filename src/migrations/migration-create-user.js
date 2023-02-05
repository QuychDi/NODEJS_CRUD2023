'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      ethnic: {
        type: Sequelize.STRING
      },
      born: {
        type: Sequelize.STRING
      },
      // MOTHER
      fullname_mo: {
        type: Sequelize.STRING
      },
      birthday_mo: {
        type: Sequelize.DATE
      },
      job_mo: {
        type: Sequelize.STRING
      },
      address_connect_mo: {
        type: Sequelize.STRING
      },
      phonenumber_mo: {
        type: Sequelize.STRING
      },
      // FATHER
      fullname_fa: {
        type: Sequelize.STRING
      },
      birthday_fa: {
        type: Sequelize.DATE
      },
      job_fa: {
        type: Sequelize.STRING
      },
      address_connect_fa: {
        type: Sequelize.STRING
      },
      phonenumber_fa: {
        type: Sequelize.STRING
      },
      // ROLE
      roleId: {
        type: Sequelize.STRING
      },
      positionId: {
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
  // async down(queryInterface, Sequelize) {
  //   await queryInterface.dropTable('Users');
  // }
};