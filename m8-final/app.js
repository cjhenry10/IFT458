// Connor Henry
// 11/29/2022
// connect to the routers, set up pug rendering

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')


const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const loanRouter = require('./routes/loanRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 3) ROUTES
app.use('/courseOverview', (req, res)=>{
  res.status(200).render('courseOverview',{
    title: ' Test Overview'
  });
})

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
          if (err) req.user = undefined;
          req.user = decode;
          next();
      });
  } else {
      req.user = undefined;
      next();
  }
})

// 3) ROUTES
app.use('/getAllCourses', (req, res)=>{
  res.status(200).render('allCourses',{
    courses: courses
  });
})
app.use('/', viewRouter);
app.use('/user/', userRouter);
app.use('/loans', loanRouter);

module.exports = app;
