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
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

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
          setLoading(false)
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
