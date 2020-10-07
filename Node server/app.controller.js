const testController = require('./src/test/test.controller');
const registerController = require('./src/register/register.controller')
const authenticationController = require('./src/authentication/authentication.controller')

module.exports = function(app) {
	testController(app);
	registerController(app);
	authenticationController(app);
}