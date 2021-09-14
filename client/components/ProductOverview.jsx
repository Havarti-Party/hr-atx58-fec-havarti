import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainImageCarousel from './MainImageCarousel';
import AverageStarRating from './AverageStarRating';
import StyleSelector from './StyleSelector';
import ProductDetails from './ProductDetails';
import AddToCart from './AddToCart';
const axios = require('axios');

export default function ProductOverview(props) {
  // needed in state: styles, selectedStyle
  // const [styles, setStyles] = useState([]);
  // const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  // const getStyles = () => {
  //   axios.get
  // }
  const product = {
    "id": 38322,
    "campus": "hr-atx",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:00.907Z",
    "updated_at": "2021-08-13T14:38:00.907Z",
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
}

  const styles = [
    {
      style_id: 227498,
      name: 'Forest Green & Black',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    },
    {
      style_id: 227499,
      name: 'Desert Brown & Tan',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    },
    {
      style_id: 227500,
      name: "Ocean Blue & Grey",
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    }
  ];
  const selectedStyle = {
      style_id: 227498,
      name: 'Forest Green & Black',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
        ],
        "skus": {
          "1318922": {
              "quantity": 8,
              "size": "XS"
          },
          "1318923": {
              "quantity": 16,
              "size": "S"
          },
          "1318924": {
              "quantity": 17,
              "size": "M"
          },
          "1318925": {
              "quantity": 10,
              "size": "L"
          },
          "1318926": {
              "quantity": 15,
              "size": "XL"
          },
          "1318927": {
              "quantity": 4,
              "size": "XL"
          }
      }
    };

  const handleStyleClick = (e) => {
    console.log('clicked Style')
    // update state to selectedStyle
  };



  return (
    <>
    <Grid container>
      <Grid item md={8}>
        <MainImageCarousel />
      </Grid>
      <Grid item md={4}>
        <AverageStarRating /><a href=""
        onClick={(e) => {
          e.preventDefault();
          const ratingsAndReviews = document.querySelector('#ratings-and-reviews');
          ratingsAndReviews.scrollIntoView({ behavior: 'smooth'});
          }}
          style={{fontSize: '12px'}} >
            Read All Reviews
        </a>
        <ProductDetails
          category={product.category}
          name={product.name}
          price={selectedStyle.original_price}
        />

        <StyleSelector
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
        />
        <AddToCart
          skus={selectedStyle.skus}
        />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item md={8}>
      {/* refactor for dynamic rendering */}
        <h5 className="productSlogan">{product.slogan}</h5>
        <p className="productDescription">{product.description}</p>
      </Grid>
      <Grid item md={4}>
        <ul>
          {product.features.map((feature, i) => (
            <li key={i}>{feature.feature}: {feature.value}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
    </>
  )
}