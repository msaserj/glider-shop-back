require('dotenv').config();

module.exports = {
  mongodbURL: process.env.MONGO_URI,
  jwt: process.env.JWT,
  assetsURI: process.env.ASSETS_URI
};
