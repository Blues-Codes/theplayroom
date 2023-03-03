var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
var express = require('express');
var router = express.Router();

const Parent = require('../models/Parent.model')

/* GET users profile. */
router.get('/profile/:userId', (req, res, next) => {
    User.findById (req.params.userId)
    // .populate('countries_visited')
    // .populate('posts')
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err)
    })

});

//Editing profile
router.post('/profile-edit/:userId', (req, res, next) => {
  User.findByIdAndUpdate(req.params.userId, {
    name:req.body.name,
    profile_image: req.body.profile_image,
    city: req.body.city,
    age: req.body.age
  },{new:true})
    .then((updatedUser) =>{
      res.json(updatedUser)
    })
    .catch((err) =>{
      console.log(err)
    })

  res.send('respond with a resource');
});



module.exports = router;
