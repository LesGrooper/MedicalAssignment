const assistantRoute = require('express').Router();
const AssistantController = require('../controllers/AssistantController');

assistantRoute.get('/', AssistantController.getData)
assistantRoute.post('/', AssistantController.registerData)
assistantRoute.post('/login', AssistantController.loginData)
assistantRoute.put('/:id', AssistantController.updateData)
assistantRoute.delete('/:id', AssistantController.deleteData)
assistantRoute.get('/assistant/:id', AssistantController.getDataById)

module.exports = assistantRoute;
