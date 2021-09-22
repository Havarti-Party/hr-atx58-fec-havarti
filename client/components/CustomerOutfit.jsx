/* eslint-disable no-undef */
import React, { useState } from "react";
import OutfitCard from "./OutfitCard.jsx";
import AddToOutfitCard from "./AddToOutfit.jsx";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@material-ui/core/Typography";

const _ = require("underscore");

const CustomerOutfit = () => {
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
  const [outfitList, updateOutfitList] = useState([]);
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

  if (!outfitList.length) {
    return (
      <>
        <Typography gutterBottom variant="h4" component="h4">
          Your Wardrobe
        </Typography>
        <Carousel responsive={responsive}>
          <AddToOutfitCard updateWardrobe={updateWardrobe} />
        </Carousel>
      </>
    );
  } else {
    return (
      <>
        <Typography gutterBottom variant="h4" component="h4">
          Your Wardrobe
        </Typography>

        <Carousel showEmptySlots itemsToShow={4}>
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
