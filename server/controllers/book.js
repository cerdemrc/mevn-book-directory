const Book = require('../models/Book')

const getAllBooks = async (req,res) => {
    const books = await Book.find();

    res.status(200).json({
        success: true,
        data: books
    })
}

module.exports = {
    getAllBooks
}