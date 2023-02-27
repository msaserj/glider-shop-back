let environment = process.env.NODE_ENV;

if (environment === 'production') {
  module.exports = require('./keys.prod');
} else {
  module.exports = require('./keys.dev');
}
