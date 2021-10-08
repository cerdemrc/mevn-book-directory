const express = require('express');
const { getAllBooks, addBook, deleteBook } = require('../controllers/book')
const { getAccessToRoute } = require('../middlewares/authorization/auth')
const router = express.Router();

router.get("/", getAllBooks) //client denemek için
//router.get("/", getAccessToRoute, getAllBooks)
//router.post("/", getAccessToRoute, addBook)
router.post("/", addBook)
router.delete("/:id", getAccessToRoute, deleteBook)

module.exports = router;
