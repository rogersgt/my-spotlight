const request = require('request');

module.exports.coordinates = (location, config) => {
  return new Promise(function(resolve,reject) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
    + location.city +',+' + location.state + '&key=' + config.api.geo_api_key;
     request(url, (err,response,body) => {
      if (err) reject('Error retrieving coordinates...');
      else {
        const json = JSON.parse(body);
        // res.send(json.results[0].geometry.location);
        resolve(json.results[0].geometry.location);
      }
    });
  });
};

module.exports.venues = (location, config) => {
  return new Promise(function (resolve, reject) {
    const url = 'https://api.foursquare.com/v2/venues/search?ll=' + location.lat + ',' + location.lng + '&client_id='
      + config.api.client_id + '&client_secret=' + config.api.client_secret + '&v=20170101';
    request(url, (err,response,body) => {
      if (err) reject('Error retrieving venues...');
      else {
        const json = JSON.parse(body);
        resolve(json);
      }
    });
  })
};
