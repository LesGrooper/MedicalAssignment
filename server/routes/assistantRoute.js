const assistantRoute = require('express').Router();
const AssistantController = require('../controllers/AssistantController');

assistantRoute.get('/', AssistantController.getData)
assistantRoute.post('/create', AssistantController.registerData)
assistantRoute.post('/login', AssistantController.loginData)
assistantRoute.put('/update/:id', AssistantController.updateData)
assistantRoute.delete('/delete/:id', AssistantController.deleteData)
assistantRoute.get('/detail/:id', AssistantController.getDataById)

module.exports = assistantRoute;
