require('dotenv').config();
console.log('The test value is ' + process.env.NODE_ENV);

module.exports = {
  mongodbURL: process.env.MONGO_URI,
  jwt: process.env.JWT,
  assetsURI: process.env.ASSETS_URI
};
