var express         = require('express'),
    routes          = express.Router();
var userController  = require('../controller/user-controller');
var passport     = require('passport');
 
routes.get('/', (req, res) => {
    return res.send('[]');
});
 
routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
 
routes.get('/check', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `${req.user.email} você está logado.` });
});
 
module.exports = routes;