const express = require('express');
const app = express();

const singIn = require('./routes/singIn');
const singUp = require('./routes/singUp');
const profile = require('./routes/profile');
const user = require('./routes/user');

app.use((req, res, next) => {
  const isLogin = true;
  if (isLogin) {
    next();
  }
  else {
    res.send("LÜtfen Giriş Yapın...")
  }
})

app.use('/user', singIn)
app.use('/kullanici', singUp)
app.use('/profile', profile)
app.use('/user', user)

app.listen(3000, () => {
  console.log('Express Server Calıştı.');
})