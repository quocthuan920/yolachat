const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: [40, 'Title must have less than 40 character '],
    trim: true,
  },
  logs: {
    created_at: {
      type: String,
      default: new Date(Date.now()).toISOString(),
    },
    update_at: {
      type: String,
      default: new Date(Date.now()).toISOString(),
    },
  },
  state: {
    type: String,
    enum: ['active', 'deleted', 'disabled'],
  },
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
