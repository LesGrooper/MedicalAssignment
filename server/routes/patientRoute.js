const patientRoute = require('express').Router();
const PatientController = require('../controllers/PatientController');

patientRoute.get('/', PatientController.getData)
patientRoute.post('/', PatientController.registerData)
patientRoute.put('/:id', PatientController.updateData)
patientRoute.delete('/:id', PatientController.deleteData)
patientRoute.get('/patient/:id', PatientController.getDataById)

module.exports = patientRoute;
