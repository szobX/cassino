"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true,
      },
      email: { type: Sequelize.DataTypes.STRING(255) },
      nickname: { type: Sequelize.DataTyps.STRING(50) },
      role: {
        type: Sequelize.DataTypes.ENUM(),
        values: ["USER", "PRO", "ULTIMATE"],
      },
      balance: { type: Sequelize.DataTypes.INTEGER, defaultStatus: 4000 },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
