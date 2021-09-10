const express = require('express');
const config = require('./config.js');
const PORT = 3030;
const axios = require('axios');
const models = require('./models.js');

let app = express();

app.use(express.static('dist'));
app.use(express.json());

app.get('/products', (req, res) => {
  //request body will need to have the id for API query
  return models.getAllProducts()
    .then((results) => {
      console.log('results from index.js', results);
    })
    .catch((error) => {
      console.log('you hit an error on server/index.js')
    })
})


app.listen(PORT, (err, success) => {
  if (err) {
    console.log('Error listening to Server...', err);
  } else {
    console.log('Listening on port:' + PORT);
  }
})