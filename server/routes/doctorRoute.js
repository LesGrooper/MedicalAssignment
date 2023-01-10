const doctorRoute = require('express').Router();
const DoctorController = require('../controllers/DoctorController');

doctorRoute.get('/', DoctorController.getData)
doctorRoute.post('/', DoctorController.registerData)
doctorRoute.put('/:id', DoctorController.updateData)
doctorRoute.delete('/:id', DoctorController.deleteData)
doctorRoute.get('/doctor/:id', DoctorController.getDataById)

module.exports = doctorRoute;
