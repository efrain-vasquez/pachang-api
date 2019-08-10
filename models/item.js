const { Schema } = require('mongoose')

const itemSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 30,
        require: true
    },
    quantity: {
        type: Number,
        minlength: 1,
        default: 1,
        require: true
    },
    carrier: {
        type: String,
        minlength: 3,
        maxlength: 30,
        require: true
    }
})

module.exports = itemSchema