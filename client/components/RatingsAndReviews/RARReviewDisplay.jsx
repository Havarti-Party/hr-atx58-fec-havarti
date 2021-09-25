import React, { useState, useEffect, useContext } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import Divider from '@material-ui/core/Divider';
import MoreReviewsButton from './RARMoreReviewsButton.jsx';
import WriteNewReviewButton from './RARWriteNewReviewButton.jsx'
import PropTypes from 'prop-types';
import { ProductsContext } from "../ProductsContext.jsx";

export default function ReviewDisplay(props) {
  const [reviewDisplayCount, updateDisplayCount] = useState(2);

  useEffect(() => {
    updateDisplayCount(2);
  }, [props.currentReviews])

  var displayReviews = props.currentReviews.results.slice(0, reviewDisplayCount);
  var displayArray = [];

  const { clickTracker } = useContext(ProductsContext);
  const [clickTrackerFunc] = clickTracker;

  displayReviews.map((review, index) => {
    displayArray.push(
      <div key={index}>
        <ReviewTile {...review} setCurrentReviews={props.setCurrentReviews} /><br />
        <Divider />
      </div>
    )
  })

  return (
    <div onClick={() =>
      clickTrackerFunc.clickTrackerFunc("Review Display", event.target)
    }>
      {displayArray}
      <div style={{marginBottom:10}}>
        <MoreReviewsButton reviewDisplayCount = {reviewDisplayCount} updateDisplayCount={updateDisplayCount} count={props.currentReviews.results.length}/>
      </div>
      <WriteNewReviewButton currentProduct={props.currentProduct} currentReviews={props.currentReviews}/>
    </div>
  )
}

ReviewDisplay.propTypes = {
  currentReviews: PropTypes.object,
  setCurrentReviews: PropTypes.func,
  currentProduct: PropTypes.array,
}