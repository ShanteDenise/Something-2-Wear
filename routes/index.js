var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
// const closetController = require('../controllers/closet')
/* GET home page. */
router.get('/', applicationController.index)

router.get('/login', usersController.login)
router.get('/user/:id/closet', usersController.show)
router.get('/user', usersController.new)

// router.get('/user/:id/closet', closetController.show)





module.exports = router;
