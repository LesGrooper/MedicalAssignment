const route = require("express").Router();
const { authentication } = require("../middleware/auth");

route.get("/server",  (req, resp, next) => {
  resp.status(200).json({
    message: "Dashboard Server",
  });
  next();
});

const patientRoutes = require("./patientRoute");
const patientTreatRoutes = require("./patientTreatRoute");
const patientMedicateRoutes = require("./patientMedicateRoute");
const wardRoutes = require("./wardRoute");
const doctorRoutes = require("./doctorRoute");
const assistantRoutes = require("./assistantRoute");

route.use("/server/patients", patientRoutes);
route.use("/server/patientTreats", patientTreatRoutes);
route.use("/server/patientMedicates", patientMedicateRoutes);
route.use("/server/wards", wardRoutes);
route.use("/server/doctors", doctorRoutes);
route.use("/server/assistants", assistantRoutes);

module.exports = route;
