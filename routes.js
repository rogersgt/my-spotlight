const request = require('request');
const fs = require('fs');
const statesData = fs.readFileSync('model/states.json');
const states = JSON.parse(statesData);
const apiCtrl = require('./controller/apiController');

module.exports = (app, config) => {

  app.get('/', (req,res) => {
    // in production client will be separated from the server
    if (config.env === "development")
      res.sendFile('client');
  });


  app.post('/api/location', (req,res) => {
    const location = {
      city: req.body.city,
      state: req.body.state
    };
    apiCtrl.getCoordinates(location,config).then((data) => {
      apiCtrl.getVenues(data, config).then((venues) => {
        res.send(venues);
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  });

  app.get('/api/states', (req,res) => {
    res.send(states);
  });

};
