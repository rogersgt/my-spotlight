const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  username: String,
  password: String,
  location {
    lat: Number,
    long: Number
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
