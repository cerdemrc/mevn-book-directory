const Book = require('../models/Book')

const addBook = async(req,res) => {
    const info = req.body;

    const bookList = await Book.create({
        ...info
    })
    res.status(200).json({
        success: true,
        data: bookList
    })
}

const deleteBook = async (req,res) => {
    const { id } = req.params;

    await Book.findByIdAndDelete(id);
    const bookList = await Book.find();
    res.status(200).json({
        success:true,
        message: "successfully deleted",
        data: bookList
    })
}

module.exports = {
    addBook,
    deleteBook
}