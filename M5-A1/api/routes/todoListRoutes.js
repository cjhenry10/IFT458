'use strict';

// module.exports = (app) => {
//     // const todoList = require('../controllers/todoListController');
//     const userHandlers = require('../controllers/userController');

//     // app.route('/tasks')
//     //     .get(todoList.list_all_tasks)
//     //     .post(todoList.loginRequired, todoList.create_a_task);

//     // app.route('/tasks/:taskId')
//     //     .get(todoList.read_a_task)
//     //     .put(todoList.updated_a_task)
//     //     .delete(todoList.delete_a_task);
    
//     app.route('/auth/register')
//         .post(userHandlers.register);
    
//     app.route('/auth/register')
//         .post(userHandlers.sign_in);
// }

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router
    .route('/auth/register')
    .post(userController.register);
router
    .route('/auth/sign_in')
    .post(userController.sign_in)
    .get(()=>'hello')

module.exports = router;