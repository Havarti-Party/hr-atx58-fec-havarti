import React, { useState, useEffect } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import Divider from '@material-ui/core/Divider';
import MoreReviewsButton from './RARMoreReviewsButton.jsx';
import WriteNewReviewButton from './RARWriteNewReviewButton.jsx'
import PropTypes from 'prop-types';

export default function ReviewDisplay(props) {
  const [reviewDisplayCount, updateDisplayCount] = useState(2);

  useEffect(() => {
    updateDisplayCount(2);
  }, [props.currentReviews])

  var displayReviews = props.currentReviews.results.slice(0, reviewDisplayCount);
  var displayArray = [];

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

ReviewDisplay.propTypes = {
  currentReviews: PropTypes.object,
  setCurrentReviews: PropTypes.func,
  currentProduct: PropTypes.array,
}