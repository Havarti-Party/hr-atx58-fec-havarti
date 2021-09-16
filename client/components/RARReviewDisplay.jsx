import React, { useState } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import sampleReview from './RARsampleReview.jsx';
import Divider from '@material-ui/core/Divider';
import MoreReviewsButton from './RARMoreReviewsButton';



export default function ReviewDisplay(props) {
  const [reviewDisplayCount, updateDisplayCount] = useState(2);
  var currentReviews = sampleReview.results.slice(0, reviewDisplayCount);
  return (
    <div>
      {currentReviews.map((review, index) => {
        return(
          <div key={index}>
            <ReviewTile {...review}/><br />
            <Divider />
          </div>
        )
      })}
      <MoreReviewsButton reviewDisplayCount = {reviewDisplayCount} updateDisplayCount={updateDisplayCount} count={sampleReview.count}/>
    </div>
  )
}