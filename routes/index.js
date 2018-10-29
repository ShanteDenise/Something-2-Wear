var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/login', usersController.login)
router.get('/user/:id/closet', usersController.show)
router.get('/user', usersController.new)





module.exports = router;
