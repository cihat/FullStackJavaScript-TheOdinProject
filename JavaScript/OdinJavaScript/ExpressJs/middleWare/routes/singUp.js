const express = require('express');
const router = express.Router();

router.get('/singUp', (req, res) => {
  res.send('singUp Sayfası');
}); 

router.post('/singUp', (req, res) => {
  res.send('singUp Sayfası (POST Method)');
}); 

module.exports = router;