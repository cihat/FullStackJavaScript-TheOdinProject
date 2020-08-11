const express = require('express');
const router = express.Router();
//Helper
const isLogin = require('../helper/isLogin');

router.get('/',isLogin, (req, res) => {
  res.send('Profile Sayfası');
}); 

module.exports = router;