const apiService = require('../service/api');

module.exports.getCoordinates = (location, config) => {
  return apiService.coordinates(location,config);
};

module.exports.getVenues = (location, config) => {
  return apiService.venues(location, config);
};
