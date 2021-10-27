const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Post = require("../models/posts");
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt');
/* GET users listing. */
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(express.json())

router.post('/register', async (req, res, next) => {
  try{
    const {firstName, lastName, email, password, isAdmin} = req.body;

    if(!(email && password && firstName && lastName)) {
      res.status(400).json({message: 'An error occured'})
    }

    const oldUser = await User.find({email})[0]
    console.log(oldUser);
    if(oldUser)
    {
       res.status(409).send("user already exists")
    }

    encrypterdPass = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName, lastName, email: email.toLowerCase(), password: encrypterdPass, isAdmin
    });
    console.log(user);
    res.status(200).json(user)
  }
  catch{(err => console.log(err))}
}
);

router.post('/login', async (req, res, next) => {
  try{

    const {email, password} = req.body;
    console.log(email, password);
    if(!(email && password)){
      res.status(400).json({message: 'inputs not given'})
    }

    const user = await User.findOne({email});
    console.log(user);
    if(user){
      const valid = await bcrypt.compare(password, user.password)
      console.log(valid);
      if(valid)
      {
        const token = JWT.sign(
        {user_id: user._id, email},
        'secret',
        {
          expiresIn: "2h"
        })
        console.log(token);
        user.token = token;
        console.log(user);
        res.status(200).json(user)
      }else{
        res.status(400).json({message: "invalid credentials"})
      }
    }
  }catch{(err => console.log(err))}
})

module.exports = router;