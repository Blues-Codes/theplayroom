require ('dotenv').config()

var express = require("express");
var router = express.Router();

const Parent = require("../models/Parent.model");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const MidGuard = require('../middleware/MidGuard')


router.post("/signup", async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "please fill out all fields" });
  }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPass = bcrypt.hashSync(req.body.password, salt);

      const createdParent =
        await Parent.create({
          password: hashedPass,
          email: req.body.email,
          name: req.body.name
        })
          .then((createdParent) => {
            const payload = { ...createdParent };

            const token = jwt.sign(payload, process.env.SECRET, {
              algorithm: "HS256",
              expiresIn: "24hr",
            });
            res.json({ token: token, createdParent: createdParent, message: `Welcome ${createdParent.name}`  });
          })
          .catch((err) => {
            res.status(400).json(err.message);
          });
      });

router.post("/login", (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "please fill out both fields" });
  }

  Parent.findOne({ email: req.body.email })
    .then((foundParent) => {
      if (!foundParent) {
        return res.status(401).json({ message: "Email or Password is incorrect!!!" });
      }

      const doesMatch = bcrypt.compareSync(
        req.body.password,
        foundParent.password
      );

      if (doesMatch) {
        const payload = { _id: foundParent._id, email: foundParent.email, name: foundParent.name, profile_image: foundParent.profile_image, city: foundParent.city, age: foundParent.age, countries_visited: foundParent.countries_visited, posts: foundParent.posts };

        const token = jwt.sign(payload, process.env.SECRET, {
          algorithm: "HS256",
          expiresIn: "24hr",
        });
        res.json({ _id: foundParent._id, token: token, message: `Welcome ${foundParent.name}` });
      } else {
        return res.status(402).json({ message: "Email or Password is incorrect" });
      }
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.get("/verify", MidGuard, (req, res) => {

  const foundParent =
  Parent.findOne({id: req.body.parent.id})
  .populate('childName')
  .populate('gamesPlayed')
  .then((foundParent) => {

    const payload = { ...foundParent };
    delete payload._doc.password;

    res.status(200).json(payload._doc);
    
  })
  .catch((err) => {
    console.log(err)
  })
});


module.exports = router;