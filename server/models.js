/* eslint-disable no-undef */
const axios = require("axios");
const config = require("./config.js");

//config ==> token:--- httpPort: 3030

const apiURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

let getAllProducts = (id, callback) => {
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
};

let getRelatedProductsIDs = (id) => {
  return axios
    .get(apiURL + `/products/${id}/related`, {
      headers: { Authorization: config.token },
    })
    .then((relatedProductsIDs) => {
      return relatedProductsIDs.data;
    })
    .catch((error) => {
      return error;
    });
};

let getProductStyles = (id) => {
  return axios
    .get(apiURL + `/products/${id}/styles`, {
      headers: { Authorization: config.token },
    })
    .then((productStyles) => {
      return productStyles.data;
    })
    .catch((error) => {
      return error;
    });
};

let getProductQuestions = (id, callback) => {
  axios
    .get(apiURL + `/qa/questions?product_id=${id}`, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      console.log("error getting qs in models", error);
      callback(error, null);
    });
};

let addNewQuestion = (questionBody, nickname, email, product_id, callback) => {
  axios
    .post(
      apiURL + "/qa/questions",
      {
        body: questionBody,
        name: nickname,
        email: email,
        product_id: product_id,
      },
      {
        headers: { Authorization: config.token },
      }
    )
    .then((response) => {
      console.log("in models", response);
      callback(null, response);
    })
    .catch((error) => {
      console.log("in modesl err:", error);
      callback(error, null);
    });
};

let addNewAnswer = (
  answerBody,
  nickname,
  email,
  images,
  question_id,
  callback
) => {
  axios
    .post(
      apiURL + `/qa/questions/${question_id}/answers`,
      {
        body: answerBody,
        name: nickname,
        email: email,
        photos: images,
      },
      {
        headers: { Authorization: config.token },
      }
    )
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      console.log("error in models", error);
      callback(error, null);
    });
};

let updateQuestionHelpfulness = (question_id, callback) => {
  axios
    .put(apiURL + `/qa/questions/${question_id}/helpful`, null, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let updateAnswerHelpfulness = (answer_id, callback) => {
  // debugger;
  axios
    .put(apiURL + `/qa/answers/${answer_id}/helpful`, null, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let reportQuestion = (question_id, callback) => {
  axios
    .put(apiURL + `/qa/questions/${question_id}/report`, null, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let reportAnswer = (answer_id, callback) => {
  axios
    .put(apiURL + `/qa/answers/${answer_id}/report`, null, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let getCurrentProduct = (id) => {
  return axios
    .get(apiURL + `/products/${id}`, {
      headers: { Authorization: config.token },
    })
    .then((currentProduct) => {
      return currentProduct.data;
    })
    .catch((error) => {
      return error;
    });
};

let getProductReviews = (id) => {
  return axios
    .get(apiURL + `/reviews?product_id=${id}`, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

let getProductMetadata = (id) => {
  return axios
    .get(apiURL + `/reviews/meta?product_id=${id}`, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error;
    });
};

let postProductReview = (data, callback) => {
  axios
    .post(apiURL + `/reviews?product_id=${data.id}`, data, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let putProductReview = (data, callback) => {
  axios
    .put(apiURL + `/reviews/${data.review_id}/helpful`, data, {
      headers: { Authorization: config.token },
    })
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error, null);
    });
};

let postClickTrackInteraction = (clickTrackObj) => {
  return axios
    .post(apiURL + "/interactions", clickTrackObj, {
      headers: { Authorization: config.token },
    })
    .then((successfulPost) => {
      console.log(successfulPost, "you made a successful post");
    })
    .catch((error) => {
      console.log(error, "you hit an error posting to the DB");
    });
};

module.exports = {
  getAllProducts,
  getRelatedProductsIDs,
  getProductStyles,
  getProductQuestions,
  getCurrentProduct,
  getProductReviews,
  getProductMetadata,
  postProductReview,
  addNewQuestion,
  addNewAnswer,
  updateAnswerHelpfulness,
  updateQuestionHelpfulness,
  putProductReview,
  reportQuestion,
  reportAnswer,
  postClickTrackInteraction,
};
