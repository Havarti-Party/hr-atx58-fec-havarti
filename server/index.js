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
      //console.log("data from /related", data);
      const relatedProductDataObj = {
        id: data[0].id,
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

  // models.getRelatedProductsIDs(id, (err, results) => {
  //   if (err) {
  //     res
  //       .status(404)
  //       .send("you hit an error trying to get the relatedProductsIDs");
  //   } else {
  //     res.status(200).send(results);
  //   }
  // });
});

app.get("/styles", (req, res) => {
  let id = req.query.ID;

  models.getProductStyles(id)
    .then(productStyles => {
      res.send(productStyles);
    })
    .catch(err => {
      res.status(404).send("you hit an error trying to get the products styles");
    })
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
  models.getCurrentProduct(id)
    .then((currentProductData) => {
      res.send(currentProductData)
    })
    .catch(err => res.status(404).send("you hit an error trying to get the current product", err))
});

app.listen(PORT, (err, success) => {
  if (err) {
    console.log("Error listening to Server...", err);
  } else {
    console.log("Listening on port:" + PORT);
  }
});
