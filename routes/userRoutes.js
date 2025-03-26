const userController = require('../config/controllers/usersController'); 
module.exports = (app) => { 
app.post('/api/users/create', userController.register); 
app.post('/api/users/login', userController.login); 
}