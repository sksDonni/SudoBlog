const express = require("express");
const User = require("../models/users");
const Post = require("../models/posts");
const bodyparser = require("body-parser");
const Subgroup = require('../models/subgroup')
const router = express.Router();
const auth = require('../auth/auth')

router.use(bodyparser.json());
router.use(express.json());

/* GET users listing. */
router
  .route("/")
  .get(async (req, res, next) => {
    Post.find({})
      .then(
        (posts) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(posts);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(auth, async (req, res, next) => {
    console.log(req.body);
    Post.create(req.body)
      .then(
        (post) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(post);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put(auth, (req, res, next) => {
    Post.put(req.body)
      .then(
        (post) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(post);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

router.route("/:postId").get(async (req, res, next) => {
  const { postId } = req.params;
  console.log(postId);
  Post.findById(postId)
    .then(
      (post) => {
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.json(post);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

  router.route("/subgroup/:name")
    .get(async (req, res, next) => {
      const {name} = req.params;
      console.log(name);
      const subgroup = await Subgroup.find({name: name})
      console.log(subgroup);
      const subgroupId = subgroup[0]._id
      console.log(subgroupId);
      Post.find({subgroupId})
      .then((posts) => {
        console.log(posts);
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json")
        res.json(posts);
      }, (err) => next(err))
      .catch(err => next(err))
    })

module.exports = router;
