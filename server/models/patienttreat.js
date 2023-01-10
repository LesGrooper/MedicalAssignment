'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientTreat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PatientTreat.belongsTo(models.Patient, {foreignKey: "patientId"})
      PatientTreat.belongsTo(models.Ward, {foreignKey: "wardId"})
      PatientTreat.belongsTo(models.Assistant, {foreignKey: "assistantId"})
    }
  }
  PatientTreat.init({
    medicine: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    assistantId: DataTypes.INTEGER,
    wardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PatientTreat',
  });
  return PatientTreat;
};