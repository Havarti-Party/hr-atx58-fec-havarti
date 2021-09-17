import React, { useState, useContext, useRef, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MainImageCarousel from './MainImageCarousel';
import AverageStarRating from './AverageStarRating';
import StyleSelector from './StyleSelector';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import AddToCart from './AddToCart';
const axios = require('axios');
import { ProductsContext } from './ProductsContext';

export default function ProductOverview(props) {
  const [overviewProduct, setOverviewProduct] = useContext(ProductsContext);
  const [isLoading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState([]);

  // needed in state: styles, selectedStyle
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  // const getStyles = () => {
  //   axios.get
  // }



const isMounted = useRef(false);

useEffect(() => {
    if (isMounted.current) {
        axios.get("/currentProduct", {
          params: {
            ID: overviewProduct.id,
          },
        })
        .then((product) => {
          setCurrentProduct(product.data);
          return axios.get("/styles", {
            params: {
              ID: overviewProduct.id,
          }})
        })
        .then((productStyles) => {
          setStyles(productStyles.data.results);
          setSelectedStyle(productStyles.data.results[0])
        })
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    } else {
      isMounted.current = true;
    }
}, [overviewProduct]);

  const handleStyleClick = (clickedStyle) => {
    setSelectedStyle(styles[clickedStyle]);
  };

  if(isLoading) {
    return <div>Loading</div>
  } else {
    return (
      <>
      <Grid container>
        <Grid item md={8}>
          <MainImageCarousel photos={selectedStyle.photos}/>
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
            category={currentProduct.category}
            name={currentProduct.name}
            originalPrice={selectedStyle.original_price}
            salePrice={selectedStyle.sale_price}
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
          <h5 className="productSlogan">{currentProduct.slogan}</h5>
          <p className="productDescription">{currentProduct.description}</p>
        </Grid>
        <Grid item md={4}>
          <ProductFeatures features={currentProduct.features}/>
        </Grid>
      </Grid>
      </>
    )
  }
}

  // const overviewProduct = {
  //   "id": 38322,
  //   "campus": "hr-atx",
  //   "name": "Camo Onesie",
  //   "slogan": "Blend in to your crowd",
  //   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  //   "category": "Jackets",
  //   "default_price": "140.00",
  //   "created_at": "2021-08-13T14:38:00.907Z",
  //   "updated_at": "2021-08-13T14:38:00.907Z",
  //   "features": [
  //       {
  //           "feature": "Fabric",
  //           "value": "Canvas"
  //       },
  //       {
  //           "feature": "Buttons",
  //           "value": "Brass"
  //       }
  //   ]
  // }
 // HARD CODED TEST DATA

  // const styles = [
  //   {
  //     style_id: 227498,
  //     name: 'Forest Green & Black',
  //     original_price: '140.00',
  //     photos: [
  //       {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
  //     ]
  //   },
  //   {
  //     style_id: 227499,
  //     name: 'Desert Brown & Tan',
  //     original_price: '140.00',
  //     photos: [
  //       {thumbnail_url: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
  //     ]
  //   },
  //   {
  //     style_id: 227500,
  //     name: "Ocean Blue & Grey",
  //     original_price: '140.00',
  //     photos: [
  //       {thumbnail_url: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
  //     ]
  //   }
  // ];
  // const selectedStyle = {
  //     style_id: 227498,
  //     name: 'Forest Green & Black',
  //     original_price: '120.00',
  //     photos: [
  //       {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
  //       ],
  //     "skus": {
  //       "1318922": {
  //           "quantity": 8,
  //           "size": "XS"
  //       },
  //       "1318923": {
  //           "quantity": 16,
  //           "size": "S"
  //       },
  //       "1318924": {
  //           "quantity": 17,
  //           "size": "M"
  //       },
  //       "1318925": {
  //           "quantity": 10,
  //           "size": "L"
  //       },
  //       "1318926": {
  //           "quantity": 15,
  //           "size": "XL"
  //       },
  //       "1318927": {
  //           "quantity": 4,
  //           "size": "XXL"
  //       }
  //     }
  // };
// END HARD CODED TEST DATA
