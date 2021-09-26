// const Conversation = require();

const Conversation = require('../models/conversationModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllConversations = async (req, res) => {
  //BUILD QUERY

  try {
    //EXECUTE QUERY
    const features = new APIFeatures(Conversation.find(), req.query)
      .filter()
      .sort()
      .limitFields();
    const conversations = await features.query;
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
    req.body.created_at = Date.now();
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
