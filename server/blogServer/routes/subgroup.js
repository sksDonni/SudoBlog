const express = require("express");
const Subgroup = require("../models/subgroup");
const bodyparser = require("body-parser");

const router = express.Router();

router.use(bodyparser.json());
router.use(express.json());

/* GET users listing. */
router.route("/")
  .get(async (req, res, next) => {
    Subgroup.find({})
      .then(
        (subgroups) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(subgroups);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(async (req, res, next) => {
    console.log(req.body);
    Subgroup.create(req.body)
      .then(
        (subgroup) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(subgroup);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

module.exports = router;
