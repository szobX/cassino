module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("roulette", {
      id: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true,
      },
      label: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(255),
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(50),
        unique: true,
      },
      pot: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable("roulette"),
};
