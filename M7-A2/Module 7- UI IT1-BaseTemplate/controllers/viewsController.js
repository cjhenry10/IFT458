const courses = require('../dev-data/data/courses.json');
const loans = require('../dev-data/data/loans.json');

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getAllCourses = async (req, res) => {
  res.status(200).render('allCourses', {
    title: `Get Course`,
    courses: courses
  });
};

exports.getAllLoans = async (req, res) => {
  res.status(200).render('allLoans', {
    title: `Get Loans`,
    loans: loans
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('Course', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

