'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

exports.register = (req, res) => {
  const newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res
            .status(401)
            .json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({
            token: jwt.sign(
              { email: user.email, fullName: user.fullName, _id: user._id },
              'RESTFULAPIs'
            ),
          });
        }
      }
    }
  );
};

exports.loginRequired = (req, res) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
};
