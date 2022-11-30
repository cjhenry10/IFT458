// Connor Henry
// 11/29/2022
// define which methods should execute at which address 
const express = require('express');
const viewsController = require('../controllers/viewsController');

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');


const router = express.Router();

router.get('/', viewsController.getLandingPAge);
// router.get('/allcourses', viewsController.getAllCourses);
// router.get('/Course', viewsController.getCourse);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignUpForm);
// router.post('/signup', viewsController.createNewUser);
// router.get('/loginUser', viewsController.getLoginUser);
router.post('/signup', authController.signup);
router.post('/login', userController.sign_in);


module.exports = router;
