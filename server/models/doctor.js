'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsToMany(models.Patient, {
        through: models.PatientMedicate,  
        foreignKey: "doctorId"
      })
    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    experties: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};