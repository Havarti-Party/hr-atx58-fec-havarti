import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from './RelatedProductCard.jsx'

export default function RelatedProducts(props) {

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
    sampleText: 'Image 1',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Image 2',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Image 3',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Image 4',
  }, {
    imgSrc: "../Images/stock.jpg",
    sampleText: 'Image 5',
  }]

  return (
    <>
      <Carousel responsive={responsive}>
        {testArr.map((obj) => {
          return <RelatedProductCard imgObj={obj} />
        })}
      </Carousel>
    </>
  )
}