const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUser).post(userController.postUser);
router.route('/:id').get(userController.getUserById);

module.exports = router;
