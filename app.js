const express = require('express');
const morgan = require('morgan');

const conversationRouter = require('./routes/conversationRouter');
const userRouter = require('./routes/userRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();

//1. Middleware
app.use(morgan('dev'));
app.use(express.json());

//3. Routes
app.use('/api/v1/conversation', conversationRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', messageRouter);

module.exports = app;
