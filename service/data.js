const mongoose = require('mongoose');
const User = require('../model/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/spotlight');

mongoose.connection.once('connected', () => {
  console.log('Database connected');
});

module.exports.saveUser = (user) => {
  const person = new User({
    username: user.username,
    password: user.password,
    location: {
      lat: user.lat || null,
      long: user.long || null
    }
  });
  return person.save();
};


module.exports.updateUser = (user) => {
  return User.findOneAndUpdate({_id: user.id}, user, {upsert: true});
};
