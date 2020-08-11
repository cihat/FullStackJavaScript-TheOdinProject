const express = require('express');
const router = express.Router();

router.get('/singIn', (req, res) => {
  res.send('signIn Sayfası');
}); 

router.post('/singIn', (req, res) => {
  res.send('signIn Sayfası (POST Method)');
}); 

module.exports = router;