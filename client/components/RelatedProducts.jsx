import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "./ProductsContext.jsx";
import AddToOutfitCard from "./AddToOutfit.jsx";

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

  const [overviewProduct, setOverviewProduct] = useContext(ProductsContext);

  //State
  const [outfitList, updateOutfitList] = React.useState([]);

  const updateWardrobe = (item, starValue) => {
    //CHANGE LOGIC
    //IF ALREADY EXISTS IN ARRAY....
    if (!starValue) {
      //remove the item from the array
      let removedArray = _.reject(outfitList, (currItem) => {
        return currItem.id === item.id;
      });
      updateOutfitList(removedArray);
      //IF NOT ADD TO ARRAY
    } else {
      updateOutfitList((outfitList) => [...outfitList, item]);
    }
  };

  return (
    <>
      <div id="related-product-card">
        <h1> Related Products </h1>
      </div>
      <Carousel centerMode={true} responsive={responsive}>
        {[overviewProduct].map((obj, index) => {
          return <RelatedProductCard RelatedObj={obj} key={index} />;
        })}
      </Carousel>
    </>
  );
}
