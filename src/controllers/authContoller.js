const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

module.exports.login = async (req, res) => {
  try {
    res.status(200).json({
      login: {
        email: req.body.email,
        password: req.body.password
      }
    });
  } catch (e) {
    res.status(500);
  }
};

module.exports.registr = async (req, res) => {
  try {
    const newUser = await User.findOne({ email: req.body.email });
    if (!newUser) {
      const salt = bcrypt.genSaltSync(8);
      const password = req.body.password;
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      });
      await user.save();
      res.status(201).json({
        status: 'succeeded',
        message: `user with email ${user.email} was created `
      });
    } else {
      res.status(409).json({
        message: 'Email is already exist'
      });
    }
  } catch (e) {
    console.log(e);
  }
};
