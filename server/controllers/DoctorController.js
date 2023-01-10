const { Doctor } = require("../models");

class DoctorController {
  static async getData(req, resp) {
    try {
      let doctors = await Doctor.findAll({
        order: [[`id`, `ASC`]],
      });
      resp.status(200).json(doctors);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { name, address, experties } = req.body;

      let doctors = await Doctor.create({
        name,
        address,
        experties,
      });
      resp.status(201).json(doctors);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { name, address, experties } = req.body;

      let doctors = await Doctor.update(
        {
          name,
          address,
          experties,
        },
        {
          where: { id },
        }
      );
      doctors[0]
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

      let doctors = await Doctor.destroy({
        where: { id },
      });

      doctors
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
      let doctors = await Doctor.findByPk(id);
      resp.status(200).json(doctors);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = DoctorController;
