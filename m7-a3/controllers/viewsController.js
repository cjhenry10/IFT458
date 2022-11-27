// const courses = require('../dev-data/data/courses.json');
const loans = require('../dev-data/data/loans.json');

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  });
};

// exports.getAllCourses = async (req, res) => {
//   res.status(200).render('allCourses', {
//     title: `Get Course`,
//     courses: courses
//   });
// };

exports.getAllLoans = async (req, res) => {
  res.status(200).render('allLoans', {
    title: `Get Loans`,
    loans: loans
  });
};

exports.getSignUpForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign Up New User'
  });
};

exports.createNewUser = (req, res) => {
  res.status(200)
}

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

