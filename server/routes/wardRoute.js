const wardRoute = require('express').Router();
const WardController = require('../controllers/WardController');

wardRoute.get('/', WardController.getData)
wardRoute.post('/create', WardController.registerData)
wardRoute.put('/update/:id', WardController.updateData)
wardRoute.delete('/delete/:id', WardController.deleteData)
wardRoute.get('/detail/:id', WardController.getDataById)

module.exports = wardRoute;
