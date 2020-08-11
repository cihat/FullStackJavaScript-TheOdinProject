const express = require('express');
const app = express();

const singIn = require('./routes/singIn');

app.use('/', singIn)

app.listen(3000, () => {
  console.log('Express Server Calıştı.');
})