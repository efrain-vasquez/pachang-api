const Event = require('../models/event')

function create ({ name, location, items, date }) {
    //const newEvent = new Event ({ name, location, items, date })
    //newEvent.save()
    
    //use create
    return Event.Create({ name, location, items, date })
}

function getAll () {
    //without .lean returns the entire object of mongodb
    return Event.find({}).lean()
}

function getById (id) {
    return Event.findById(id).lean()
}

async function assignCarrier (eventId, indexItem, carrierName) {
    const event = await Event.findById(eventId)
    event.items(indexitem).carrier = carrierName
    return event.save()
} 


module.exports = {
    create
}