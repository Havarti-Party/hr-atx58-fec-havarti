import React, { useState } from 'react';
import OutfitCard from './OutfitCard.jsx'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerOutfit = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let testArr = [{
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Outfit 1',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Outfit 2',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Outfit 3',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Outfit 4',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Outfit 5',
  }]

  return (
    <>
      <Carousel responsive={responsive}>
        <div id='related-product-card'>
          <h1> CLICK TO ADD TO YOUR OUTFIT </h1>
        </div>
        {testArr.map((obj, index) => {
          return <OutfitCard imgObj={obj} key={index} />
        })}
      </Carousel>
    </>
  )
}

export default CustomerOutfit;