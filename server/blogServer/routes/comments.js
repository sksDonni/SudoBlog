const express = require("express");
const Comments = require("../models/comments");
const bodyparser = require("body-parser");

const router = express.Router();

router.use(bodyparser.json());
router.use(express.json());

/* GET users listing. */
router
  .route("/")
  .get(auth, async (req, res, next) => {
    Comments.find({})
      .then(
        (comments) => {
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
    Comments.create(req.body)
      .then(
        (comment) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(comment);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

router.route("/:CommentsId").get(async (req, res, next) => {
  const { CommentsId } = req.params;
  console.log(CommentsId);
  Comments.findById(CommentsId)
    .then(
      (Comments) => {
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.json(Comments);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;
