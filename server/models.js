const axios = require('axios');
const config = require('./config.js');

//config ==> token:--- httpPort: 3030

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx';

let getAllProducts = () => {
  axios.get(apiURL + '/products', { headers: { Authorization: config.token } })
    .then((results) => {
      console.log(results.data)
    })
    .catch((error) => {
      console.log('you hit an error on routers.js')
    })
}

console.log(getAllProducts());

module.exports = {
  getAllProducts,
}