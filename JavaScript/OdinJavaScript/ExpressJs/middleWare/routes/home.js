const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const user = true;
  if (user) {
    res.send('Home sayfası')
  }
  else {
    return next({ status: 404, message: 'Bu Kullanıcı Bulunamadı' })
  }
  res.send('Home Sayfası');
});

module.exports = router;