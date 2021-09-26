const User = require('../models/userModel');

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
exports.postUser = async (req, res) => {
  try {
    req.body.created_at = Date.now();
    req.body.updated_at = Date.now();

    const users = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Bad request',
      data: err,
    });
  }
};
