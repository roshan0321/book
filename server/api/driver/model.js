
var restful = require('node-restful');
var mongoose = restful.mongoose;

var driverSchema = new mongoose.Schema({
  date: Date,
  name: String,
  phone: Number,
  
});

module.exports = restful.model('Drivers', driverSchema);