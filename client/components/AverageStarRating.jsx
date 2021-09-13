import React from 'react';
import StarRatings from 'react-star-ratings';

export default function AverageStarRating(props) {

  return (
    <StarRatings
      rating={2}
      starDimension={'15px'}
      starSpacing={'1px'}
    />
  )
}