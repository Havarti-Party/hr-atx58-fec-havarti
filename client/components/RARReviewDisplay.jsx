import React, { useState } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import sampleReview from './RARsampleReview.jsx';

export default function ReviewDisplay(props) {
  return (
    <div>
      {sampleReview.results.map((review, index) => {
        return(
          <div key={index}>
            <ReviewTile {...review}/><br />
          </div>
        )
      })}
    </div>
  )
}