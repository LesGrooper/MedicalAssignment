const patientRoute = require("express").Router();
const PatientController = require("../controllers/PatientController");
// const { authentication } = require("../middleware/auth");

patientRoute.get("/",  PatientController.getData);
patientRoute.post("/create", PatientController.registerData);
patientRoute.put("/update/:id", PatientController.updateData);
patientRoute.delete("/delete/:id", PatientController.deleteData);
patientRoute.get("/detail/:id", PatientController.getDataById);

module.exports = patientRoute;
