/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useContext } from "react";
import { ProductsContext } from "../ProductsContext.jsx";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
//Files
import RelatedProductCard from "./RelatedProductCard.jsx";
//Material-UI
import { Typography } from "@mui/material";
//Axios
const axios = require("axios");

export default function RelatedProducts() {
  //useContext
  const { overviewProduct } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;

  //RelatedProductsState
  const [relatedProductsIDs, setRelatedProductsIDs] = React.useState();
  const [relatedProductsArr, setRelatedProductsArr] = React.useState([]);

  useEffect(() => {
    let id;
    if (overviewProductState.id) {
      id = overviewProductState.id;
    } else {
      id = overviewProductState.overviewProduct.id;
    }

    axios
      .get("/related/id", {
        params: {
          ID: id,
        },
      })
      .then((relatedProductsIDs) => {
        setRelatedProductsIDs(relatedProductsIDs.data);
      });
  }, [overviewProductState]);

  useEffect(() => {
    if (relatedProductsIDs) {
      let promiseArray = relatedProductsIDs.map((id) => {
        return axios.get("/related", {
          params: {
            ID: id,
          },
        });
      });
      Promise.all(promiseArray).then((relatedProductsArrOfObjs) => {
        let relatedProductsObjs = relatedProductsArrOfObjs.map(
          (obj) => obj.data
        );
        setRelatedProductsArr(relatedProductsObjs);
      });
    }
  }, [relatedProductsIDs]);

  if (!relatedProductsArr) {
    return (
      <>
        <Typography gutterBottom variant="h4" component="h4">
          Related Products
        </Typography>
      </>
    );
  } else
    return (
      <>
        <Typography gutterBottom variant="h4" component="h4">
          Related Products
        </Typography>
        <Carousel itemsToShow={4}>
          {relatedProductsArr.map((obj, index) => {
            return <RelatedProductCard RelatedObj={obj} key={index} />;
          })}
        </Carousel>
      </>
    );
}
