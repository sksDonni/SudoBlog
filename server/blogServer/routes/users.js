const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Post = require("../models/posts");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
/* GET users listing. */
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(express.json());

router.post("/register", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    if (!(email && password && firstName && lastName)) {
      res.status(400).json({ message: "An error occured" });
    }

    const oldUser = await User.find({ email })[0];
    console.log(oldUser);
    console.log(oldUser);
    if (oldUser) {
      res.status(409).json({ message: "user already exists" });
    }

    encrypterdPass = await bcrypt.hash(password, 10);

    User.create({
      firstName,
      lastName,
      email,
      password: encrypterdPass,
    })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).json(err));
  } catch {
    (err) => console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("body", req.body);
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!(email && password)) {
      res.status(400).json({ message: "inputs not given" });
    }

    const user = await User.findOne({ email });
    console.log("user", user);
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      console.log(valid);
      if (valid) {
        console.log(user);
        const token = JWT.sign({ user_id: user._id, email }, "secret", {
          expiresIn: "2h",
        });
        console.log(token);
        const updatedUser = { token };
        console.log(updatedUser);
        res.status(200).json(updatedUser);
      } else {
        res.status(400).json({ message: "invalid credentials" });
      }
    }
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
