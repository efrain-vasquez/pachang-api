const express = require('express');
const mongoose = require('mongoose');

const event = require('./usecases/event');
const app = express();

app.use(express.json());

app.get('/eventos', async (request, response) => {
  try {
  const allEvents = await event.getAll()
  response.json({
    success: true,
    message: 'All events',
    data: {
      events: allEvents
    }
  })
 } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

app.post('/eventos', async (request, response) => {
  try {
  //request.body
  //name = '
  //date = '
  /*items = [{
      name: '',
      quantity: 0,
      carrier: ''
  }]*/
  //location

  const {
      name,
      date,
      items,
      location
  } = request.body;

  const createEvent = await event.create({ name, location, items, date })

  response.json({
    success: true,
    message: 'Event created!', 
    data: {
      event: createEvent
    }
  })

  response.json({
      name,
      date,
      items,
      location
  })
} catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }  
})

app.get('/eventos/:id', async (request, response) => {
  try {
  const { id } = request.params
  const foundEvent = await event.getById(id)

  response.json ({
    success: true,
    message: 'Event found',
    data: {
      event: foundEvent
    }
  })
} catch (error) {
  response.status(400)
  response.json({
    success: false,
    error: error.message
  })
 }
})

app.put('/eventos/:id/items/:index', async (request, response) => {
  try {
  const { id, index } = request.params
  const { name } = request.body

  const updatedEvent = await event.assignCarrier(id, index, name) 
  response.json ({
    success: true,
    message: 'Carried assigned',
    data:  {
      event: updatedEvent
    }
  })
} catch (error) {
  response.status(400)
  response.json({
    success: false,
    error: error.message
  })
 }
})





mongoose.connect('mongodb+srv://efrain:valerie7777777@pachangapp-qq9tv.mongodb.net/pachangapp?retryWrites=true&w=majority', 
  {useNewUrlParser: true}, (error) => {
  if (error) return console.error('ERROR: ', error)
  console.log('DB CONNECTED!')
  app.listen(8080, () => {
    console.log('server running in port 8080')
  })
});
