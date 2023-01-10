const wardRoute = require('express').Router();
const WardController = require('../controllers/WardController');

wardRoute.get('/', WardController.getData)
wardRoute.post('/', WardController.registerData)
wardRoute.put('/:id', WardController.updateData)
wardRoute.delete('/:id', WardController.deleteData)
wardRoute.get('/ward/:id', WardController.getDataById)

module.exports = wardRoute;
