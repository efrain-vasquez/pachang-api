const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.post('/eventos', (request, response) => {
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

  response.json({
      name,
      date,
      items,
      location
  })
});



mongoose.connect(mongodb+srv://efrain:efrain7777777@pachangapp-qq9tv.mongodb.net/pachangapp?retryWrites=true&w=majority, 
  {useNewUrlParser: true
  }, (error) => {
  if (error) return console.error('ERROR: ', error)
  console.log('DB CONNECTED!')
  app.listen(8080, () => {
    console.log('server running in port 8080')
  })
});
