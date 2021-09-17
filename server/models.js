const axios = require("axios");
const config = require("./config.js");

//config ==> token:--- httpPort: 3030

const apiURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

let getAllProducts = (id, callback) =>
  //HAVE TO RETURN axios.get or use parens
  axios
    .get(apiURL + "/products", { headers: { Authorization: config.token } })
    .then((results) => {
      callback(null, results.data);
    })
    .catch((error) => {
      console.log(error);
      callback(error, null);
    });

let getRelatedProductsIDs = (id, callback) => {
  axios
    .get(apiURL + `/products/${id}/related`, {
      headers: { Authorization: config.token },
    })
    .then((relatedProductsIDs) => {
      callback(null, relatedProductsIDs.data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let getProductStyles = (id, callback) => {
  axios
    .get(apiURL + `/products/${id}/styles`, {
      headers: { Authorization: config.token },
    })
    .then((productStyles) => {
      callback(null, productStyles.data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports = {
  getAllProducts,
  getRelatedProductsIDs,
  getProductStyles,
};
