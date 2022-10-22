//** Code START
// 3) ROUTES
const express = require('express');
const morgan = require('morgan');

// const courseRouter = require('./routes/courseRoutes');
// const userRouter = require('./routes/userRoutes');
// const loanRouter = require('./routes/loanRoutes');
const ledgerRouter = require('./routes/ledgerRoute');
const loansRouter = require('./routes/loansRoute');
const customerRouter = require('./routes/customerRoute');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// app.use('/api/v1/courses', courseRouter);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/loans/ledgers', ledgerRouter);
app.use('/api/v1/loans/customers', customerRouter);
app.use('/api/v1/loans/loans', loansRouter);

module.exports = app;
//** code END