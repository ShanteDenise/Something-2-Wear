var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const topsController = require('../controllers/tops')
const bottomsController = require('../controllers/bottoms')
/* GET home page. */

router.get('/', applicationController.index)

router.get('/login', usersController.login)
router.get('/users', usersController.index)

router.get('/users/:usersId/closet/:closetId', usersController.show)

router.get('/users/:usersId/closet/:closetId/tops', topsController.index)
router.get('/users/:usersId/closet/:closetId/bottoms', bottomsController.index)

// router.post('/', topsController.create)
router.get('/users/:usersId/closet/:closetId/tops/:topsId', topsController.show)

router.get('/users/:usersId/closet/:closetId/tops/:topsId/edit', topsController.edit)
router.patch('/users/:usersId/closet/:closetId/tops/:topsId', topsController.update)
// router.post('/users', usersController.index)


module.exports = router;
