const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Please provide a title']
    },
    type:{
        type: String
    },
    pageCount:{
        type: Number
    },
    description:{
        type: String
    },
    authors:{
        type: Array
    },
    categories:{
        type: Array
    }
})

module.exports = mongoose.model('Book', BookSchema);