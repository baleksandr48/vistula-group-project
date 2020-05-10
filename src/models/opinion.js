"use strict";

module.exports = (sequelize, DataTypes) => {
  const Opinion = sequelize.define("Opinion", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });

  Opinion.associate = function (models) {
    Opinion.belongsTo(
      models.Book,
      { foreignKey: "bookId", targetKey: "id" },
      { onDelete: "CASCADE" }
    );
  };
  return Opinion;
};
