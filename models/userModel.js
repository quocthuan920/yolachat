const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  phone: {
    type: String,
    require: [true, 'Account requires a phone number to be verified'],
    validate: [validator.isMobilePhone, 'This phone number is not accepted'],
    unique: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'This email is not accepted'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: [6, 'Password must have at least 6 characters'],
    maxlength: [16, 'Password must have less than 16 characters'],
    select: false,
  },
  password_confirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  fisrt_name: {
    type: String,
    require: [true, 'First name cannot be left blank'],
    maxlength: [10, 'First name must have less than 10 characters'],
  },
  middle_name: {
    type: String,
    maxlength: [10, 'Middle name must have less than 10 characters'],
  },
  last_name: {
    type: String,
    require: [true, 'Last name cannot be left blank'],
    maxlength: [10, 'Last name must have less than 10 characters'],
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  state: {
    type: String,
    enum: ['active', 'disable'],
    default: 'active',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
