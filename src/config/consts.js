require('dotenv').config();
console.log('The test value is ' + process.env.ASSETS_URI);
console.log('The test value is ' + process.env.JWT);

let environment = process.env.NODE_ENV;

if (environment === 'production') {
  module.exports = require('./keys.prod');
} else {
  module.exports = require('./keys.dev');
}
