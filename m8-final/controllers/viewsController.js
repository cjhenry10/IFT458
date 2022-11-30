// Connor Henry
// 11/29/2022
// methods of working with view/pages
// all functions will render a specific pug file from the first argument in render function
// data is passed as an object as the second argument to be used in the pug file

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
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

