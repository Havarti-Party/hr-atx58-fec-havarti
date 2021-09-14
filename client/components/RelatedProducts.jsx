import React, { useState, useEffect } from 'react';
const _ = require('underscore');

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from './RelatedProductCard.jsx'
import Grid from '@material-ui/core/Grid';


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

  //URLs are hardcoded and not on the orig obj
  let testArr = [{
    "id": 38323,
    "campus": "hr-atx",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    'url': "../Images/stock.jpg",
    "features": [
      {
        "feature": "Lenses",
        "value": "Ultrasheen"
      },
      {
        "feature": "UV Protection",
        "value": null
      },
      {
        "feature": "Frames",
        "value": "LightCompose"
      }
    ]
  }, {
    "id": 38324,
    "campus": "hr-atx",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "features": [
      {
        "feature": "Fabric",
        "value": "100% Cotton"
      },
      {
        "feature": "Cut",
        "value": "Skinny"
      }
    ]
  }, {
    "id": 38329,
    "campus": "hr-atx",
    "name": "YEasy 350",
    "slogan": "Just jumped over jumpman",
    "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
    "category": "Kicks",
    "default_price": "450.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      },
      {
        "feature": "Stitching",
        "value": "Double Stitch"
      }
    ]
  }, {
    "id": 38328,
    "campus": "hr-atx",
    "name": "Blues Suede Shoes",
    "slogan": "2019 Stanley Cup Limited Edition",
    "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
    "category": "Dress Shoes",
    "default_price": "120.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      },
      {
        "feature": "Stitching",
        "value": "Double Stitch"
      }
    ]
  }]

  //State
  const [favoritesArray, updateFavoritesArray] = React.useState([]);

  const updateFavorites = (item, starValue) => {

    if (!starValue) {
      //remove the item from the array
      let removedArray = _.reject(favoritesArray, (currItem) => {
        return currItem.id === item.id
      })
      updateFavoritesArray(removedArray);
    } else {
    updateFavoritesArray(favoritesArray => [...favoritesArray, item]);

    }
  }

useEffect(() => {
  console.log('favorites Array', favoritesArray);
})



  return (
    <>
      <div id='related-product-card'>
        <h1> Related Products </h1>
      </div>
      <Carousel centerMode={true} responsive={responsive}>
        {testArr.map((obj, index) => {
          return <RelatedProductCard RelatedObj={obj} key={index} updateFavorites={updateFavorites}/>
        })}
      </Carousel>
    </>
  )
}