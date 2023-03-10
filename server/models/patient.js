"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsToMany(models.Doctor, {
        through: models.PatientMedicate,
        foreignKey: "patientId",
      });

      Patient.belongsToMany(models.Assistant, {
        through: models.PatientTreat,
        foreignKey: "patientId",
      });

      Patient.hasMany(models.PatientMedicate, {
        foreignKey: "patientId",
      });

      Patient.hasMany(models.PatientTreat, { foreignKey: "patientId" });
    }
  }
  Patient.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
