const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books')

const app = express();

mongoose.connect('mongodb://localhost/udemy', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('open', () => {
  console.log('MongoDB: Connected');
});
mongoose.connection.on('error', (err) => {
  console.log('MongoDB: Error ', err);
})
/**
 *
 *  .then(() => {
  console.log('MongoDB bağlantısı Sağlandı...');
}).catch((err) => {
  console.log('MongoDB Bağlantı Hatası');
})
 */


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
