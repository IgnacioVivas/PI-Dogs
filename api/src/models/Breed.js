const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weightImperial: {
      type: DataTypes.INTEGER,
    },
    weightMetric: {
      type: DataTypes.INTEGER,
    },
    heightImperial: {
      type: DataTypes.INTEGER,
    },
    heightMetric: {
      type: DataTypes.INTEGER,
    },
    lifeExpectancy: {
      type: DataTypes.INTEGER,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
