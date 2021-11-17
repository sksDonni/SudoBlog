const express = require("express");
const User = require("../models/users");
const Post = require("../models/posts");
const bodyparser = require("body-parser");
const Subgroup = require("../models/subgroup");
const auth = require("../auth/auth");
const Comments = require("../models/comments");
const router = express.Router();
const mongoose = require("mongoose");
const storage = require("../fileUpload/upload");
const multer = require("multer");

router.use(bodyparser.json());
router.use(express.json());

const upload = multer({
  storage: storage,
});

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

  .post(auth, upload.single("imageFiles"), async (req, res, next) => {
    console.log(req.body);
    req.body.author = req.user.user_id;
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

router
  .route("/:postId")
  .get(async (req, res, next) => {
    let { postId } = req.params;
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
  })

  .delete(async (req, res, next) => {
    let { postId } = req.params;
    console.log(postId);
    Post.findByIdAndDelete(postId)
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

  .put(async (req, res, next) => {
    let updatedpost = req.body;
    let { postId } = req.params;
    console.log(req.params, req.body);
    Post.findByIdAndUpdate(postId, req.body)
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

router
  .route("/:postId/comments")
  .get(async (req, res, next) => {
    const { postId } = req.params;
    console.log(postId);
    Comments.find({ postId })
      .then(
        (comments) => {
          console.log(comments);
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(comments);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(auth, async (req, res, next) => {
    console.log("user", req.user, "body", req.body);
    const { postId } = req.params;
    console.log(postId, req.body);
    var emailId = req.user.email;
    var userId = req.user.user_id;
    var user = await User.findOne({ emailId });
    var firstName = user.firstName;
    var lastName = user.lastName;
    var values = { ...req.body, firstName, lastName, postId, userId };
    console.log(values);
    Comments.create(values)
      .then((comment) => {
        console.log(comment);
        Post.findById(postId)
          .then(
            (post) => {
              console.log(post);
              console.log(post.comments);
              var updatedComments = post.comments.concat(comment);
              console.log(updatedComments);
              var postDoc = post._doc;
              var updatedpost = { ...postDoc, comments: updatedComments };
              res.statusCode = 200;
              console.log(updatedpost);
              res.setHeader("content-Type", "application/json");
              res.json(updatedpost);
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

router.route("/subgroup/:name").get(async (req, res, next) => {
  const { name } = req.params;
  console.log(name);
  const subgroup = await Subgroup.find({ name: name });
  console.log(subgroup);
  const subgroupId = subgroup[0]._id;
  console.log(subgroupId);
  Post.find({ subgroupId })
    .then(
      (posts) => {
        console.log(posts);
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.json(posts);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;
