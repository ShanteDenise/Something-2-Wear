var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', applicationController.index)


module.exports = router;
