const { Ward, Assistant } = require("../models");

class WardController {
  static async getData(req, resp) {
    try {
      let wards = await Ward.findAll({
        include: [
          {
            model: Assistant,
          },
        ],
        order: [[`id`, `ASC`]],
      });
      resp.status(200).json(wards);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { name, category, availability } = req.body;
      const assistantId = +req.userData.id;

      let wards = await Ward.create({
        name,
        category,
        availability,
        assistantId,
      });
      resp.status(201).json(wards);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { name, category, availability, assistantId } = req.body;

      let wards = await Ward.update(
        {
          name,
          category,
          availability,
          assistantId,
        },
        {
          where: { id },
        }
      );
      wards[0]
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

      let wards = await Ward.destroy({
        where: { id },
      });

      wards
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
      let wards = await Ward.findByPk(id);
      resp.status(200).json(wards);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = WardController;
