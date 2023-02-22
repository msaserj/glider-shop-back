const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(require('morgan')('dev'));
app.use(require('cors')());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(passport.initialize());
require('./src/middleware/passport')(passport);

app.use('/api/gliders', require('./src/routes/gliders'));
app.use('/api/order', require('./src/routes/order'));
app.use('/api/auth', require('./src/routes/auth'));

// parse application x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//images path
app.use('/static', express.static(__dirname + '/assets'));

module.exports = app;
