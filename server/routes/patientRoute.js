const patientRoute = require('express').Router();
const PatientController = require('../controllers/PatientController');

patientRoute.get('/', PatientController.getData)
patientRoute.post('/create', PatientController.registerData)
patientRoute.put('/:id', PatientController.updateData)
patientRoute.delete('/delete/:id', PatientController.deleteData)
patientRoute.get('detail//patient/:id', PatientController.getDataById)

module.exports = patientRoute;
