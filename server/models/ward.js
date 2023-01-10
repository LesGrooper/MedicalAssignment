'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ward.hasOne(models.PatientTreat, {foreignKey: "wardId"})
      Ward.belongsTo(models.Assistant, {foreignKey: "assistantId"})
    }
  }
  Ward.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    assistantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ward',
  });
  return Ward;
};