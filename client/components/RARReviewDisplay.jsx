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
  var displayArray = [];

  // displayReviews.sort(function(a, b) {
  //   console.log(a);
  //   console.log(b);
  //   var aDate = a.date;
  //   var bDate = b.date;
  //   if (aDate > bDate) {
  //     return -1;
  //   }
  //   if (aDate < bDate) {
  //     return 1;
  //   }
  //   return 0;
  // })

  displayReviews.map((review, index) => {
    displayArray.push(
      <div key={index}>
        <ReviewTile {...review} setCurrentReviews={props.setCurrentReviews} /><br />
        <Divider />
      </div>
    )
  })



  return (
    <div>
      {displayArray}
      <MoreReviewsButton reviewDisplayCount = {reviewDisplayCount} updateDisplayCount={updateDisplayCount} count={props.currentReviews.results.length}/>
      <WriteNewReviewButton currentProduct={props.currentProduct} currentReviews={props.currentReviews}/>
    </div>
  )
}