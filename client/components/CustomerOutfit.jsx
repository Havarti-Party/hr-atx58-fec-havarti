import React, { useState, useEffect, useRef } from "react";
import OutfitCard from "./OutfitCard.jsx";
import AddToOutfitCard from "./AddToOutfit.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const _ = require("underscore");

const CustomerOutfit = (props) => {
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

  //State
  const [outfitList, updateOutfitList] = React.useState([]);
  const [currentProduct, setCurrentProduct] = React.useState({});

  const updateWardrobe = (OutfitObj) => {
    if (_.contains(outfitList, OutfitObj)) {
      updateOutfitList(outfitList);
    } else {
      updateOutfitList((outfitList) => [...outfitList, OutfitObj]);
    }
  };

  const removeItemFromWardrobe = (OutfitObj) => {
    let copyOfOutfitList = outfitList;

    copyOfOutfitList = _.without(
      copyOfOutfitList,
      _.findWhere(copyOfOutfitList, OutfitObj)
    );

    updateOutfitList(copyOfOutfitList);
  };

  const isInitialMount = useRef(true);

  if (!outfitList.length) {
    return (
      <>
        <AddToOutfitCard updateWardrobe={updateWardrobe} />
      </>
    );
  } else {
    return (
      <>
        <div id="outfit-card">
          <h1> Your Wardrobe </h1>
        </div>
        <Carousel centerMode={true} responsive={responsive}>
          <AddToOutfitCard updateWardrobe={updateWardrobe} />
          {outfitList.map((obj, index) => {
            return (
              <OutfitCard
                updateWardrobe={updateWardrobe}
                remove={removeItemFromWardrobe}
                OutfitObj={obj}
                key={index}
              />
            );
          })}
        </Carousel>
      </>
    );
  }
};
export default CustomerOutfit;
