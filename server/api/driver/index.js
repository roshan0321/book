var express = require('express');
var router = express.Router();

var Driver = require('./model');
Driver.methods(['get', 'put', 'post', 'delete']);
Driver.register(router, '/drivers');

module.exports = router;
