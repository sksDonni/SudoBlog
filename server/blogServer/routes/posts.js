const express = require('express');
const User = require('../models/users')
const Post = require('../models/posts')
const bodyparser = require('body-parser')

const router = express.Router();

router.use(bodyparser.json())
router.use(express.json())

/* GET users listing. */
router.route('/')
  .get(async (req, res, next) => {
    Post.find({})
    .then((posts) => {
      res.statusCode = 200;
      res.setHeader('content-Type', 'application/json');
      res.json(posts);
    }, (err) => next(err))
    .catch(err => next(err))
  })

  .post(async (req, res, next) => {
    console.log(req.body);
    Post.create(req.body)
    .then((post) => {
      res.statusCode = 200;
      res.setHeader('content-Type', 'application/json');
      res.json(post);
    }, (err) => next(err))
    .catch(err => next(err))
  })

  .put((req, res, next) => {
    Post.put(req.body)
    .then((post) => {
      res.statusCode = 200
      res.setHeader('content-Type', 'application/json')
      res.json(post)
    }, (err) => next(err))
    .catch(err => next(err))
  })

router.route('/:postId')
  .get(async (req, res, next) => {
    const {postId} = req.params;
    console.log(postId);
    Post.findById(postId)
    .then((post) => {
      res.statusCode = 200
      res.setHeader('content-Type', 'application/json')
      res.json(post)
    }, (err) => next(err))
    .catch((err) => next(err))
  })

module.exports = router;
