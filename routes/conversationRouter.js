const express = require('express');
const conversationController = require('../controllers/conversationController');

const router = express.Router();

router
  .route('/')
  .get(conversationController.getAllConversations)
  .post(conversationController.postConversation);
router.route('/:id').get(conversationController.getConversationById);
module.exports = router;
