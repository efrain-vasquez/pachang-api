const mongoose = require('mongoose')
const itemSchema = require('./item')


const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 100,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    items: {
        type: [itemSchema]
    },
    location: {
        type: String,
        minlength: 5,
        maxlength: 120,
        require: true
    }
});

module.exports = mongoose.model('Event', eventSchema);


