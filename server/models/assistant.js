'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assistant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assistant.belongsToMany(models.Patient,{
        through: models.PatientTreat,
        foreignKey: "assistantId"})
      Assistant.hasMany(models.Ward, {foreignKey: "assistantId"})
    }
  }
  Assistant.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Assistant',
  });
  return Assistant;
};