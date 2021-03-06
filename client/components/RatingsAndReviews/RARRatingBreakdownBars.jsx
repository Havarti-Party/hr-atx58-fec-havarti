import React, { useEffect, useContext } from 'react';
import ProgressBar from './RARProgressBar.jsx';
import PropTypes from 'prop-types';
import { ProductsContext } from "../ProductsContext.jsx";

export default function RatingBreakdownBars(props) {
  // TODO: cleanup this mess. This can probably be done with like 3 functions and some 6th-grade math.
  // var starArray = [1, 2, 3, 4, 5];
  var starBreakdown = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  var numReviews = props.currentReviews.results.length;

  props.currentReviews.results.map(review => {
    starBreakdown[review.rating]++;
  }, [props.currentProduct]);

  var percentBreakdown = {
    1: starBreakdown[1] / numReviews * 100,
    2: starBreakdown[2] / numReviews * 100,
    3: starBreakdown[3] / numReviews * 100,
    4: starBreakdown[4] / numReviews * 100,
    5: starBreakdown[5] / numReviews * 100
  }

  var newAverageStarRating = 0;

  const { clickTracker } = useContext(ProductsContext);
  const [clickTrackerFunc] = clickTracker;

  for (var key in starBreakdown) {
    newAverageStarRating += key * starBreakdown[key];
  }

  if (numReviews != 0) {
    newAverageStarRating /= numReviews;
  } else {
    newAverageStarRating = 0;
  }

  if (Object.keys(props.currentReviews.ratings).length === 0) {
    percentBreakdown = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  }

  useEffect(() => {
    props.setStarRating(newAverageStarRating);
  });

  return (
    <div onClick={() =>
      clickTrackerFunc.clickTrackerFunc("Ratings Breakdown", event.target)
    }>
      <ProgressBar starRating={5} ratePercent={percentBreakdown[5]}/>
      <ProgressBar starRating={4} ratePercent={percentBreakdown[4]}/>
      <ProgressBar starRating={3} ratePercent={percentBreakdown[3]}/>
      <ProgressBar starRating={2} ratePercent={percentBreakdown[2]}/>
      <ProgressBar starRating={1} ratePercent={percentBreakdown[1]}/>
    </div>
  )
}

RatingBreakdownBars.propTypes = {
  currentReviews: PropTypes.object,
  currentProduct: PropTypes.object,
  setStarRating: PropTypes.func,
}