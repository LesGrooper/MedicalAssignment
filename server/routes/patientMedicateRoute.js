const patientMedicateRoute = require('express').Router();
const PatientMedicateController = require('../controllers/PatientMedicateController');

patientMedicateRoute.get('/', PatientMedicateController.getData)
patientMedicateRoute.post('/', PatientMedicateController.registerData)
patientMedicateRoute.put('/:id', PatientMedicateController.updateData)
patientMedicateRoute.delete('/:id', PatientMedicateController.deleteData)
patientMedicateRoute.get('/patientMedicate/:id', PatientMedicateController.getDataById)

module.exports = patientMedicateRoute;
