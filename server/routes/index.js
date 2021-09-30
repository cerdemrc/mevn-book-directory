const express = require('express');
const auth = require('./auth')
const book = require('./book')

const router = express.Router();

router.use("/books", book);
router.use("/auth", auth);

module.exports = router;