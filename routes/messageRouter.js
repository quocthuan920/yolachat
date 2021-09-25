const express = require('express');

const messageController = require('../controllers/messageController');

const router = express.Router();

router
  .route('/')
  .get(messageController.getAllMessage)
  .post(messageController.postMessage);

router.route('/:id').get(messageController.getMessageById);

module.exports = router;
