const express = require('express');
const { addBook, deleteBook } = require('../controllers/auth')
const router = express.Router();

router.post("/", addBook)
router.delete("/:id", deleteBook)

module.exports = router;
