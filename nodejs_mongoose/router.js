const express       = require('express'),
app             = express();


const router = express.Router();

const Home = require('./controllers/HomeController');
const User = require('./controllers/UserController');

new Home(router);
new User(router);

module.exports = router;