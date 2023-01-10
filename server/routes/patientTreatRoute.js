const patientTreatRoute = require('express').Router();
const PatientTreatController = require('../controllers/PatientTreatController');

patientTreatRoute.get('/', PatientTreatController.getData)
patientTreatRoute.post('/', PatientTreatController.registerData)
patientTreatRoute.put('/:id', PatientTreatController.updateData)
patientTreatRoute.delete('/:id', PatientTreatController.deleteData)
patientTreatRoute.get('/patientTreat/:id', PatientTreatController.getDataById)

module.exports = patientTreatRoute;
