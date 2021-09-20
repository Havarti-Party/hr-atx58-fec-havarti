import React, { useState, useEffect } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import sampleReview from './RARsampleReview.jsx';
import Divider from '@material-ui/core/Divider';
import MoreReviewsButton from './RARMoreReviewsButton.jsx';
import WriteNewReviewButton from './RARWriteNewReviewButton.jsx'



export default function ReviewDisplay(props) {
  const [reviewDisplayCount, updateDisplayCount] = useState(2);

  useEffect(() => {
    updateDisplayCount(2);
  }, [props.currentReviews])

  var displayReviews = props.currentReviews.results.slice(0, reviewDisplayCount);

  return (
    <div>
      {displayReviews.map((review, index) => {
        return(
          <div key={index}>
            <ReviewTile {...review}/><br />
            <Divider />
          </div>
        )
      })}
      <MoreReviewsButton reviewDisplayCount = {reviewDisplayCount} updateDisplayCount={updateDisplayCount} count={props.currentReviews.results.length}/>
      <WriteNewReviewButton currentProduct={props.currentProduct} currentReviews={props.currentReviews}/>
    </div>
  )
}