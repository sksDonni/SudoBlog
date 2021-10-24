const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bodyparser = require('body-parser')
const postRouter = require('./routes/posts')
const app = express();
const cors = require('cors')

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
const CONNECTION_URL = "mongodb://localhost:27017/blog";
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => app.listen(PORT, console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message))


module.exports = app;