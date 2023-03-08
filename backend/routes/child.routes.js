var express = require('express');
var router = express.Router();
const MidGuard = require('../middleware/midGuard')
const Parent = require('../models/Parent.model')
const Child = require('../models/Child.model')
const Updates = require('../models/Update.model')


router.get("/verify", MidGuard, (req, res) => {
    Parent.findOne({_id: req.user._id})
    // .populate('childName')
    // .populate('gamesPlayed')
  
    .then((foundParent) => {
  
      const payload = { ...foundParent };
      console.log("this is the payload", payload, foundParent)
      delete payload._doc.password;
      res.status(200).json(payload._doc);
      
    })
    .catch((err) => {
      console.log(err)
    })
  });

  router.post("/childLogin", (req, res, next) => {
    if (!req.body.childName ) {
        return res.status(401).json({ message: "Have your parents signup!" });
     
    }
  
    Parent.findOne({ childName: req.body.childName })
      .then((foundParent) => {
        if (!foundParent) {
          return res.status(401).json({ message: "Have your parents signup!" });
        }
  
        // const doesMatch = bcrypt.compareSync(
        //   req.body.password,
        //   foundParent.password
        // );
  
        if (doesMatch) {
          const payload = { _id: foundParent._id, email: foundParent.email, name: foundParent.name, city: foundParent.city, childName: foundParent.childName, childAge: foundParent.childAge, relation: foundParent.relation };
  
          const token = jwt.sign(payload, process.env.SECRET, {
            algorithm: "HS256",
            expiresIn: "24hr",
          });
          console.log("doesmatch", payload)
          return res.json({ _id: foundParent._id, token: token, message: `Welcome ${foundParent.childName}` });
        } else {
          return res.status(402).json({ message: "Email or Password is incorrect" });
        }
      })
      .catch((err) => {
        res.json(err.message);
      });
  });
  

module.exports = router;