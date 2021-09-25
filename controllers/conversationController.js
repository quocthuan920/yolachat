// const Conversation = require();

const Conversation = require('../models/conversationModel');

exports.getAllConversations = async (req, res) => {
  const conversations = await Conversation.find();
  try {
    res.status(200).json({
      status: 'success',
      data: conversations,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getConversationById = async (req, res) => {
  const conversations = await Conversation.findById(req.params.id);
  try {
    res.status(200).json({
      status: 'success',
      data: conversations,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.postConversation = async (req, res) => {
  try {
    const newConversation = await Conversation.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        conversation: newConversation,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
