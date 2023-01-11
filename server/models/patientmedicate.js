"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PatientMedicate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PatientMedicate.belongsTo(models.Doctor, { foreignKey: "doctorId" });
      PatientMedicate.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  PatientMedicate.init(
    {
      seen_by: DataTypes.DATE,
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PatientMedicate",
    }
  );
  return PatientMedicate;
};
