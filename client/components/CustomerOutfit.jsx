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
    "id": 38325,
    "campus": "hr-atx",
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "features": [
      {
        "feature": "Fabric",
        "value": "99% Cotton 1% Elastic"
      },
      {
        "feature": "Cut",
        "value": "Loose"
      }
    ]
  }, {
    "id": 38322,
    "campus": "hr-atx",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
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
  },
  {
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
    "id": 38326,
    "campus": "hr-atx",
    "name": "Heir Force Ones",
    "slogan": "A sneaker dynasty",
    "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    "category": "Kicks",
    "default_price": "99.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
    "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
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
        "feature": "Mid-Sole",
        "value": "ControlSupport Arch Bridge"
      },
      {
        "feature": "Stitching",
        "value": "Double Stitch"
      }
    ]
  }]

  return (
    <>
      <div id='outfit-card'>
        <h1>  Your Wardrobe </h1>
      </div>
      <Carousel centerMode={true} responsive={responsive}>

        {testArr.map((obj, index) => {
          return <OutfitCard OutfitObj={obj} key={index} />
        })}
      </Carousel>
    </>
  )
}

export default CustomerOutfit;