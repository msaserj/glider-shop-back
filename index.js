const app = require('./app');
const mongoose = require('mongoose');
const keys = require('./src/config/consts');

require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(keys.mongodbURL).then(() => {
  app.listen(3010, () => {
    console.log('App is running on ' + process.env.NODE_ENV + ' server');
  });
});
