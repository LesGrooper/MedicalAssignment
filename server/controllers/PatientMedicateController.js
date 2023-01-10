const { PatientMedicate, Patient, Doctor } = require("../models");

class PatientMedicateController {
  static async getData(req, resp) {
    try {
      let patientMedicate = await PatientMedicate.findAll({
        order: [[`id`, `ASC`]],
        include: [
          {
            model: Patient,
            attribute: []
          },
          {
            model: Doctor,
          },
        ],
      });
      resp.status(200).json(patientMedicate);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { seen_by, patientId, doctorId } = req.body;

      let patientMedicate = await PatientMedicate.create({
        seen_by,
        patientId,
        doctorId,
      });
      resp.status(201).json(patientMedicate);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { seen_by, patientId, doctorId } = req.body;

      let patientMedicate = await PatientMedicate.update(
        {
          seen_by,
          patientId,
          doctorId,
        },
        {
          where: { id },
        }
      );
      patientMedicate[0]
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

      let patientMedicate = await PatientMedicate.destroy({
        where: { id },
      });

      patientMedicate
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
      let patientMedicate = await PatientMedicate.findByPk(id);
      resp.status(200).json(patientMedicate);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = PatientMedicateController;
