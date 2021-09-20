import React, { useState, useEffect } from 'react';
import sampleReview from './RARsampleReview.jsx';

export default function ReviewSorter(props) {

  var numReviews = props.currentReviews.results.length;

  return (
    <div>
      {numReviews} reviews, sorted by relevance
    </div>
  )
}