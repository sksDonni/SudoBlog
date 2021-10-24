const express = require('express');
const router = express.Router();
const User = require('../models/users')
const Post = require('../models/posts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('wait')
});


module.exports = router;
