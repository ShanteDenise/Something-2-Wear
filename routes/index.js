var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const loginController = require('../controllers/login')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/login', loginController.index)



router.get('/user/new', usersController.new)
router.get('/user/:id', usersController.show)
router.get('/user', usersController.create)





module.exports = router;
