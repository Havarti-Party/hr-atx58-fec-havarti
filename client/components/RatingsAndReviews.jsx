import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import Grid from '@material-ui/core/Grid';
import RatingBreakdownBars from './RARRatingBreakdownBars.jsx';
import SizeBar from './RARSizeBar.jsx';
import ComfortBar from './RARComfortBar.jsx';
import ReviewSorter from './RARReviewSorter.jsx';
import ReviewDisplay from './RARReviewDisplay.jsx';

export default function RatingsAndReviews(props) {
  const [averageStarRating, updateAverageStarRating] = useState(0);
  return (
  <>
    <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
    <Grid container spacing={6}>
      <Grid item xs={6} s={6} m={6} lg={6} xl={6} className="RARLeftColumn">
        <div>100% of reviews recommend this product</div>
        {averageStarRating} <StarRatings rating={averageStarRating} starDimension={'15px'} starSpacing={'1px'}/>
        <RatingBreakdownBars updateAverageStarRating = {updateAverageStarRating}/>
        <SizeBar />
        <ComfortBar />
      </Grid>
      <Grid item xs={6} s={6} m={6} lg={6} xl={6} className="RARRightColumn">
        <ReviewSorter />
        <ReviewDisplay />
      </Grid>
    </Grid>
    </>
  )
}











