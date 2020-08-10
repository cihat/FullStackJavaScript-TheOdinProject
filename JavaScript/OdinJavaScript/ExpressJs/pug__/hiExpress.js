const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { name: 'Cihat', surname: 'Salik', job: 'Junior Developer' });
})

app.listen(3000, () => {
  console.log('Express SErver Çalıştı');
})