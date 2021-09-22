const express = require("express");

const config = require("./config.js");
const PORT = 3030;
const axios = require("axios");
const models = require("./models.js");

let app = express();

app.use(express.static("dist"));

app.use(express.json());

app.get("/products", (req, res) => {
  let id = null;
  models.getAllProducts(id, (err, results) => {
    if (err) {
      console.log("you hit an error on server/index.js");
      res.status(404).send("you hit an error");
    } else {
      res.status(200).send(results);
    }
  });
});

app.get("/related/id", (req, res) => {
  let id = req.query.ID;
  // let id = 38323;
  Promise.all([models.getRelatedProductsIDs(id)])
    .then((arrOfRelatedProductIDs) => {
      res.status(201).send(arrOfRelatedProductIDs[0]);
    })
    .catch((error) => {
      console.log("failed to get related data");
      res.status(501).send(error);
    });
});

app.get("/related", (req, res) => {
  let id = req.query.ID;

  Promise.all([models.getCurrentProduct(id), models.getProductStyles(id)])
    .then((data) => {
      // console.log("data from /related", data[1].results[0].sale_price);
      const relatedProductDataObj = {
        id: data[0].id,
        default_price: data[0].default_price,
        sale_price: data[1].results[0].sale_price,
        name: data[0].name,
        slogan: data[0].slogan,
        description: data[0].description,
        category: data[0].category,
        default_price: data[0].default_price,
        features: data[0].features,
        url: data[1].results[0].photos[0].url,
      };
      res.status(201).send(relatedProductDataObj);
    })
    .catch((error) => {
      console.log("failed to get related data");
      res.status(501).send(error);
    });
});

app.get("/styles", (req, res) => {
  let id = req.query.ID;
  models
    .getProductStyles(id)
    .then((productStyles) => {
      res.send(productStyles);
    })
    .catch((err) => {
      res
        .status(404)
        .send("you hit an error trying to get the products styles");
    });
});

app.get("/qa", (req, res) => {
  let id = req.query.id;
  models.getProductQuestions(id, (err, results) => {
    if (err) {
      res
        .status(404)
        .send("could not find any questions for the related product");
    } else {
      res.status(200).send(results.data);
    }
  });
});

app.get("/currentProduct", (req, res) => {
  let id = req.query.ID;
  models
    .getCurrentProduct(id)
    .then((currentProductData) => {
      res.send(currentProductData);
    })
    .catch((err) =>
      res
        .status(404)
        .send("you hit an error trying to get the current product", err)
    );
});

app.get("/reviews", (req, res) => {
  let id = req.query.ID;
  models.getProductReviews(id, (err, result) => {
    if (err) {
      res.status(404).send("Error: could not find product reviews.");
    } else {
      res.status(200).send(result.data);
    }
  });
});

app.get("/reviewtotal", (req, res) => {
  let id = req.query.ID;
  Promise.all([models.getProductReviews(id), models.getProductMetadata(id)])
    .then((data) => {
      const totalReviewObj = {
        id: data[0].product,
        count: data[0].results.length,
        results: data[0].results,
        ratings: data[1].ratings,
        recommended: data[1].recommended,
        characteristics: data[1].characteristics,
      };
      res.status(201).send(totalReviewObj);
    })
    .catch((error) => {
      console.log("Error: failed to get review data.");
      res.status(501).send(error);
    });
});

app.post("/reviews", (req, res) => {
  let id = req.query.ID;
  models.postProductReview(req.body, (err, result) => {
    if (err) {
      console.log("Error posting new review: ", err);
      res.status(404).send("Error: could not add new product review.");
    } else {
      res.status(201).send(result.data);
    }
  });
});

app.post('/qa/reportQuestion', (req, res) => {
  var question_id = req.body.question_id;
  models.reportQuestion(question_id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204);
    }
  })
})

app.post('/qa/reportAnswer', (req, res) => {
  var answer_id = req.body.answer_id;
  models.reportAnswer(answer_id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204);
    }
  })
})

app.post('/qa/questionHelpfulness', (req, res) => {
  var question_id = req.body.questionId;
  models.updateQuestionHelpfulness(question_id, (err, result) => {
    if (err) {
      console.log('error in index')
      res.status(500).send(err);
    } else {
      res.status(204)
    }
  })
})

app.post('/qa/answerHelpfulness', (req, res) => {
  var answer_id = req.body.answer_id;
  models.updateAnswerHelpfulness(answer_id, (err, result) => {
    if (err) {
      debugger;
      res.status(500).send(err);
    } else {
      res.status(204)
    }
  })
})

app.post('/qa/questions', (req, res) => {
  var body = req.body.question_body;
  var email = req.body.email;
  var name = req.body.asker_name;
  var product_id = req.body.product_id;
  models.addNewQuestion(body, name, email, product_id, (err, result) => {
    if (err) {

      res.status(500).send('error creating your question')
    } else {
      res.status(201).send('CREATED');
    }
  })
})

app.post('/qa/answers', (req, res) => {
  console.log(req.body)
  var body = req.body.answerBody
  var name = req.body.nickname
  var email = req.body.email;
  var images = req.body.images;
  var question_id = req.body.question_id;
  models.addNewAnswer(body, name, email, images, question_id, (err, result) => {
    if (err) {
      console.log('error index.js')
      res.status(500).send('error creating your answer')
    } else {
      res.status(201).send('CREATED')
    }
  })
})

app.listen(PORT, (err, success) => {
  if (err) {
    console.log("Error listening to Server...", err);
  } else {
    console.log("Listening on port:" + PORT);
  }
});
