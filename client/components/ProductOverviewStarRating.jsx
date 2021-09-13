import React from 'react';
import StarRatings from 'react-star-ratings';

export default function ProductOverviewStarRating (props) {

  return (
    <StarRatings
    rating={4}
    starDimension={'15px'}
    starSpacing={'1px'}
    />
  )
}