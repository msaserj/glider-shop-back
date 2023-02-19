const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const constants = require('../config/consts');

module.exports.login = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      const passwordResult = bcrypt.compareSync(req.body.password, existingUser.password);
      if (passwordResult) {
        const token = jwt.sign(
          {
            email: existingUser.email,
            userId: existingUser._id
          },
          constants.jwt,
          { expiresIn: 3600 }
        );
        res.status(200).json({
          token: `Bearer ${token}`
        });
      } else {
        res.status(401).json({
          message: 'Wrong password or email. Try again',
          status: 'error'
        });
      }
    } else {
      res.status(404).json({
        message: `User with email ${req.body.email} does not exist.`,
        status: 'error'
      });
    }
  } catch (e) {
    console.log(e);
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
        message: 'Email is already exist',
        status: 'error'
      });
    }
  } catch (e) {
    console.log(e);
  }
};
