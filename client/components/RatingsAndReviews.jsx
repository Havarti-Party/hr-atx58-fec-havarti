import React, { useState, useContext, useEffect, useRef } from 'react';
import StarRatings from 'react-star-ratings';
import Grid from '@material-ui/core/Grid';
import RatingBreakdownBars from './RARRatingBreakdownBars.jsx';
import SizeBar from './RARSizeBar.jsx';
import ComfortBar from './RARComfortBar.jsx';
import ReviewSorter from './RARReviewSorter.jsx';
import ReviewDisplay from './RARReviewDisplay.jsx';
import { ProductsContext } from './ProductsContext';
const axios = require('axios');


export default function RatingsAndReviews(props) {
  const [currentProduct, setCurrentProduct] = useContext(ProductsContext);
  const [currentReviews, setCurrentReviews] = useState({});
  const [averageStarRating, updateAverageStarRating] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      axios.get('/reviewtotal', {
        params: {
          ID: currentProduct.id
        }
      })
      .then((reviewData) => {
        // console.log('Review data object: ', reviewData);
        setCurrentReviews(reviewData.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error while fetching reviews:');
        console.log(error);
      })
    } else {
    isMounted.current = true;
  }}, [currentProduct])

  if (isLoading) {
    return (
      <div>
        Loading reviews...
      </div>
    )
  } else {
      return (
      <>
        <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
        <Grid container spacing={6}>
          <Grid item xs={6} s={6} m={6} lg={6} xl={6} className="RARLeftColumn">
            <div>100% of reviews recommend this product</div>
            {averageStarRating} <StarRatings rating={averageStarRating} starDimension={'15px'} starSpacing={'1px'} />
            <RatingBreakdownBars updateAverageStarRating = {updateAverageStarRating} currentReviews={currentReviews}/>
            <SizeBar />
            <ComfortBar />
          </Grid>
          <Grid item xs={6} s={6} m={6} lg={6} xl={6} className="RARRightColumn">
            <ReviewSorter currentReviews={currentReviews}/>
            <ReviewDisplay currentReviews={currentReviews} currentProduct={currentProduct}/>
          </Grid>
        </Grid>
      </>
    )
  }
}











