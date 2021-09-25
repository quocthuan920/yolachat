const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  message_type: {
    type: String,
    enum: ['text', 'photo', 'gif', 'audio', 'file'],
    default: 'text',
  },
  message: {
    type: String,
    maxlength: [512, 'Message must less than 512 characters'],
  },
  logs: {
    created_at: {
      type: Date,
      default: new Date(Date.now()).toISOString(),
    },
    delete_at: {
      type: Date,
    },
  },
  state: {
    type: String,
    enum: ['created', 'delivered', 'arrived', 'reported', 'deleted'],
    default: 'created',
  },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
