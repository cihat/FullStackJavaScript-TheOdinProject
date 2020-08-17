const express = require('express');
const router = express.Router();

//Modeşs
const Book = require('../models/Book')

router.get('/new', function (req, res, next) {
  const book = new Book({
    title: 'Cihat',
    published: true,
    comments: [{ message: 'Harika Bir Kitap.' },
    { message: "Ben Pek Beğenmedim." }
    ],
    meta: {
      votes: 12,
      favs: 104
    },
  });
  book.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
});
router.get('/search', (req, res) => {
  Book.find({}, (err, data) => {
    res.json(data)
  });
});

router.get('/searchOne', (req, res) => {
  Book.findOne({ title: "Cihat" }, (err) => {
    res.json(data);
  });
});

router.get('/searchById', (req, res) => {
  Book.findById('5f35853903870c33c89765b0', (err) => {
    res.json(data);
  });
});

module.exports = router;
