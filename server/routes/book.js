const express = require('express');
const { getAllBooks, addBook, deleteBook } = require('../controllers/book')
const { getAccessToRoute } = require('../middlewares/authorization/auth')
const router = express.Router();

//router.get("/", getAllBooks)
//router.post("/", addBook)
//router.delete("/:id", deleteBook)
router.get("/", getAccessToRoute, getAllBooks)
router.post("/", getAccessToRoute, addBook)
router.delete("/:id", getAccessToRoute, deleteBook)


module.exports = router;
