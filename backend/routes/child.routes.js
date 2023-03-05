var express = require('express');
var router = express.Router();
const MidGuard = require('../middleware/midGuard')
const Parent = require('../models/Parent.model')
const Child = require('../models/Child.model')
const Updates = require('../models/Update.model')




module.exports = router;