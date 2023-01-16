const doctorRoute = require("express").Router();
const DoctorController = require("../controllers/DoctorController");
// const { authentication } = require("../middleware/auth");

doctorRoute.get("/",  DoctorController.getData);
doctorRoute.post("/create", DoctorController.registerData);
doctorRoute.put("/update/:id", DoctorController.updateData);
doctorRoute.delete("/delete/:id", DoctorController.deleteData);
doctorRoute.get("/detail/:id", DoctorController.getDataById);

module.exports = doctorRoute;
