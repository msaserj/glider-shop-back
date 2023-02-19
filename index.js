const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017').then(() => {
  app.listen(port, () => {
    console.log('App is running on port ' + port);
  });
});
