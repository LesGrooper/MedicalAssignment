const { PatientTreat, Ward, Assistant, Patient } = require("../models");

class PatientTreatController {
  static async getData(req, resp) {
    try {
      let patientTreats = await PatientTreat.findAll({
        order: [[`id`, `ASC`]],
        include: [
          {
            model: Ward,
          },
          {
            model: Patient,
          },
          {
            model: Assistant,
          },
        ],
      });
      resp.status(200).json(patientTreats);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { medicine, patientId, assistantId, wardId } = req.body;

      let patientTreats = await PatientTreat.create({
        medicine,
        patientId,
        assistantId,
        wardId,
      });
      resp.status(201).json(patientTreats);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { medicine, patientId, assistantId, wardId } = req.body;

      let patientTreats = await PatientTreat.update(
        {
          medicine,
          patientId,
          assistantId,
          wardId,
        },
        {
          where: { id },
        }
      );
      patientTreats[0]
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

      let patientTreats = await PatientTreat.destroy({
        where: { id },
      });

      patientTreats
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
      let patientTreats = await PatientTreat.findByPk(id);
      resp.status(200).json(patientTreats);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = PatientTreatController;
