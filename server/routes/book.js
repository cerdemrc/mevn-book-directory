const express = require('express');
const { getAllBooks } = require('../controllers/book')
const router = express.Router();

router.get("/", getAllBooks)

module.exports = router;
