var express = require('express');
var router = express.Router();

const MidGuard = require('../middleware/midGuard')
const Parent = require('../models/Parent.model')
const Child = require('../models/Child.model')
const Updates = require('../models/Update.model')

/* GET users profile. */
router.get('/profile', MidGuard, (req, res, next) => {
    Parent.findById (req.params.parentId)
    .then((foundParent) => {
      res.json(foundParent);
    })
    .catch((err) => {
      console.log(err)
    })

});

//EDITING PROFILE ADDING CHILD
router.post('/profile-edit', MidGuard, (req, res, next) => {
  console.log(req.parent)
  Parent.findByIdAndUpdate(req.params.parentId, {
    name:req.body.name,
    city: req.body.city,
    childName: req.body.childName,
    childAge: req.body.childAge, 
    relation: req.body.relation
  },{new:true})
    .then((updatedParent) =>{
      res.json(updatedParent)
    })
    .catch((err) =>{
      console.log(err)
    })
        let newChild = {
        childName: req.body.childName,
        childAge: req.body.childAge,
        relation: req.body.relation
    }
      Child.create(newChild)
        .then((createdChild) => {
            return Parent.findByIdAndUpdate(
                {
                    _id: req.params.parentId
                }, 
                {
                $push: {child: createdChild._id}
                },
                {new: true})
        })
        .then((updatedParent) => {
             return updatedParent.populate('child')
            })
              .catch((err) => {
            console.log(err)
        })
});


// });

  
// });

// // Adding Child 
// router.post('/profile-edit/:userId', (req, res, next) => {
//   User.findByIdAndUpdate(req.params.userId, {}


  
//   Country.findOne({alpha2Code: req.body.alpha2Code})
//       .then((foundCountry) => {
//           if (foundCountry) {

//               User.findByIdAndUpdate(req.params.userId, {
//                   $addToSet: {countries_visited: foundCountry._id}
//               },
//               {new: true})
//               .then((updatedUser) => {
//                   return updatedUser.populate('countries_visited')
//                   })
//               .then((populated) => {
//                   return populated.populate('posts')
//               })
//               .then((second) => {
//                   res.json(second)
//               })
//               .catch((err) => {
//                   console.log(err)
//               })

//           } else {

//               let newCountry = {
//                   name: req.body.name,
//                   capital: req.body.capital,
//                   alpha2Code: req.body.alpha2Code,
//                   flag: req.body.flag,
//                   region: req.body.region,
//                   languages: req.body.languages,
//                   currency: req.body.currency
//               }


//               Country.create(newCountry)
//                   .then((createdCountry) => {
//                       return User.findByIdAndUpdate(
//                           {
//                               _id: req.params.userId
//                           }, 
//                           {
//                           $push: {countries_visited: createdCountry._id}
//                           },
//                           {new: true})
//                   })
//                   .then((updatedUser) => {
//                        return updatedUser.populate('countries_visited')
//                       })
//                   .then((populated) => {
//                       return populated.populate('posts')
//                   })
//                   .then((second) => {
//                       res.json(second)
//                   })
//                   .catch((err) => {
//                       console.log(err)
//                   })
//           }
//       })

// });


module.exports = router;
