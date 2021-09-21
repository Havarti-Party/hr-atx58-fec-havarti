import React, { useState, useEffect, useContext, useRef } from "react";
import { ProductsContext } from "./ProductsContext.jsx";
import AddToOutfitCard from "./AddToOutfit.jsx";

const axios = require("axios");
const _ = require("underscore");

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from "./RelatedProductCard.jsx";
import Grid from "@material-ui/core/Grid";

export default function RelatedProducts(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  //useContext
  const { overviewProduct } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;

  //RelatedProductsState

  const [relatedProductsIDs, setRelatedProductsIDs] = React.useState();
  const [relatedProductsArr, setRelatedProductsArr] = React.useState([]);

  // const isMounted = useRef(false);

  useEffect(() => {
    // if (isMounted.current) {
      axios
        .get("/related/id", {
          params: {
            ID: overviewProductState.id,
          },
        })
        .then((relatedProductsIDs) => {
          setRelatedProductsIDs(relatedProductsIDs.data);
        });
    // } else {
    //   isMounted.current = true;
    // }
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
    } else {
      // isMounted.current = true;
    }
  }, [relatedProductsIDs]);

  if (!relatedProductsArr) {
    return (
      <>
        <h1>Loading Recommended Products</h1>
      </>
    );
  } else
    return (
      <>
        <div id="related-product-card">
          <h1> Related Products </h1>
        </div>
        <Carousel centerMode={true} responsive={responsive}>
          {relatedProductsArr.map((obj, index) => {
            return <RelatedProductCard RelatedObj={obj} key={index} />;
          })}
        </Carousel>
      </>
    );
}
