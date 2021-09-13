import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from './RelatedProductCard.jsx'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <div id='related-product-card'>
          <h1> Recommended Outfit </h1>
        </div>
        {testArr.map((obj, index) => {
          return <RelatedProductCard imgObj={obj} key={index} />
        })}
      </Carousel>
    </>
  )
}