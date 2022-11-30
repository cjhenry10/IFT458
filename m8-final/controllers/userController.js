// Connor Henry
// 11/29/2022
// methods of working with users
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

  // create jwt based on secret/expiration
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// create jwt and set cookie on client, then redirect
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  // redirect to all loans
  res.redirect('/loans/all')
};

// register a new user
exports.register = async (req, res) => {
  const newUser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    hash_password: bcrypt.hashSync(req.body.password, 10)
  });
  newUser.save(function (err, user) {
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

// sign in with email and password
exports.sign_in = (req, res, next) => {
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
          createSendToken(user, 200, res);
        }
      }
    }
  );
};

// check if JWT token exists in the headers of the request to ensure user is logged in
exports.loginRequired = (req, res, next) => {
  // console.log(req.rawHeaders);
  if (req.rawHeaders.at(-1).startsWith('jwt=') || req.rawHeaders.at(-3).startsWith('jwt=')) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
};
