const app = require('./app');
const mongoose = require('mongoose');
const keys = require('./src/config/consts');

const port = process.env.PORT || 8000;

require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(keys.mongodbURL).then(() => {
  app.listen(port, () => {
    console.log('App is running on port ' + port);
  });
});
