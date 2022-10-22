'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
// const Task = require('./api/models/todoListModel');
const User = require('./api/models/userModel');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const userRouter = require('./api/routes/todoListRoutes');






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

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`running on port ${port}`);
})