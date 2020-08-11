const express = require('express');
const app = express();

const singIn = require('./routes/singIn');
const singUp = require('./routes/singUp');
const home = require('./routes/home');

app.set('view engine', "pug")
const user = require('./routes/user');

const profile = require('./routes/profile');

app.use('/home', home)
//app.use('/user', singIn)
app.use('/kullanici', singUp)
app.use('/profile', profile)
app.use('/user', user)

app.use((err, req, res, next) => { 
  res.status(err.status);
  res.render('error', {
    message: err.message,
    status: err.status
  })
})
app.listen(3000, () => {
  console.log('Express Server Calıştı.');
})