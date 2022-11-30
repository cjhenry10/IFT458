// Connor Henry
// 11/29/2022
// define which methods should execute at which address 
const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
// define which methods should execute at which address 

const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', userController.sign_in);
router.get('/api/users', userController.getAllUsers);
// router
//   .route('/')
//   .get(userController.getAllUsers)
//   //.post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;