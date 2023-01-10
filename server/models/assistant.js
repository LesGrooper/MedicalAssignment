"use strict";
const { Model } = require("sequelize");
const { encryptPwd } = require("../helpers/bcrypt");
const { options } = require("../routes");
module.exports = (sequelize, DataTypes) => {
  class Assistant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assistant.belongsToMany(models.Patient, {
        through: models.PatientTreat,
        foreignKey: "assistantId",
      });
      Assistant.hasMany(models.Ward, { foreignKey: "assistantId" });
    }
  }
  Assistant.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Name couldn't be empty!`,
          },
        },
      },
      password: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (assistant, options) => {
          assistant.password = encryptPwd(assistant.password);
        },
      },
      sequelize,
      modelName: "Assistant",
    }
  );
  return Assistant;
};
