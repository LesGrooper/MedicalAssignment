const { Assistant } = require("../models");
const {decryptPwd} = require('../helpers/bcrypt');
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonweboken");

class AssistantController {
  static async getData(req, resp) {
    try {
      let assistants = await Assistant.findAll({
        order: [[`id`, `ASC`]],
      });
      resp.status(200).json(assistants);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async registerData(req, resp) {
    try {
      const { name, password, address } = req.body;

      let assistants = await Assistant.create({
        name,
        password,
        address,
      });
      resp.status(201).json(assistants);
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async loginData(req, resp) {
    try {
      const { password, name } = req.body;

      let emailFound = await Assistant.findOne({
        where: {
          name,
        },
      });

      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let accsess_token = tokenGenerator(emailFound)
          
          
          
          let verifyToken = tokenVerifier(accsess_token)
          console.log(verifyToken)
          resp.status(200).json(accsess_token);
        } else {
          resp.status(400).json({
            message: `invalid email/password`
          })
        }
      } else {
        resp.status(404).json({
          message: `name with ${name} not found!`,
        });
      }
    } catch (error) {
      resp.status(500).json(error);
    }
  }

  static async updateData(req, resp) {
    try {
      const id = +req.params.id;

      const { name, password, address } = req.body;

      let assistants = await Assistant.update(
        {
          name,
          password,
          address,
        },
        {
          where: { id },
        }
      );
      assistants[0]
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

      let assistants = await Assistant.destroy({
        where: { id },
      });

      assistants
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
      let assistants = await Assistant.findByPk(id);
      resp.status(200).json(assistants);
    } catch (error) {
      resp.status(500).json(error);
    }
  }
}

module.exports = AssistantController;
