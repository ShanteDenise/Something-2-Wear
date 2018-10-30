var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const topsController = require('../controllers/tops')
const bottomsController = require('../controllers/bottoms')
const closetController = require('../controllers/closet')


/* GET home page. */

router.get('/', applicationController.index)

router.get('/login', usersController.login)



router.get('/users', usersController.index)

router.get('/users/new' , usersController.new)
router.post('/users', usersController.create)

router.delete('/users/:usersId', usersController.delete)


router.get('/users/:usersId/closet/:closetId/tops', topsController.index)
router.get('/users/:usersId/closet/:closetId/bottoms', bottomsController.index)
router.get('/users/:usersId/closet/new', closetController.new)
router.post('users/:userId/closet/:closetId', closetController.create)
router.get('/users/:usersId/closet/:closetId', usersController.show)




// router.post('/', topsController.create)
router.get('/users/:usersId/closet/:closetId/tops/:topsId', topsController.show)

router.get('/users/:usersId/closet/:closetId/tops/:topsId/edit', topsController.edit)
router.patch('/users/:usersId/closet/:closetId/tops/:topsId', topsController.update)

router.get('/users/:usersId/closet/:closetId/tops/new', topsController.new)
router.post('/users/:usersId/closet/:closetId/tops', topsController.create)

module.exports = router;
