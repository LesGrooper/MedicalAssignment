const { Patient,  PatientMedicate, PatientTreat } = require("../models");

class PatientController {
  static async getData(req, resp) {
    try {
      let patients = await Patient.findAll({
        order: [[`id`, `ASC`]],
        include:[
          {
            model: PatientMedicate
          },
          {
            model: PatientMedicate
          }
        ]
      });
      resp.status(200).json(patients);
    } catch (error) {
      console.log(error)
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { name, address, age } = req.body;

      let patients = await Patient.create({
        name,
        address,
        age,
      });
      resp.status(201).json(patients);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { name, address, age } = req.body;

      let patients = await Patient.update(
        {
          name,
          address,
          age,
        },
        {
          where: { id },
        }
      );
      patients[0]
        ? resp.status(201).json({
            message: `Id with ${id} has been updated!`,
          })
        : resp.status(403).json({
            message: `Bad request with id ${id}`,
          });
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async deleteData(req, resp) {
    try {
      const id = +req.params.id;

      let patients = await Patient.destroy({
        where: { id },
      });

      patients
        ? resp.status(200).json({
            message: `ID with ${id} has been deleted`,
          })
        : resp.status(403).json({
            message: `Bad request with ${id}`,
          });
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async getDataById(req, resp) {
    try {
      const id = +req.params.id;
      let patients = await Patient.findByPk(id);
      resp.status(200).json(patients);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = PatientController;
