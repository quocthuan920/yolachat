const Message = require('../models/messageModel');

exports.getAllMessage = async (req, res) => {
  try {
    const Messages = await Message.find();
    res.status(200).json({
      status: 'success',
      data: Messages,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
exports.getMessageById = async (req, res) => {
  try {
    const Messages = await Message.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: Messages,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
exports.postMessage = async (req, res) => {
  try {
    const Messages = await Message.create(req.body);
    res.status(200).json({
      status: 'success',
      data: Messages,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
