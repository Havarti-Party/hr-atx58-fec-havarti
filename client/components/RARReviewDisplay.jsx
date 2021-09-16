import React, { useState } from 'react';
import ReviewTile from './RARReviewTile.jsx';
import sampleReview from './RARsampleReview.jsx';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';



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
      <Button variant='contained' color='primary' padding="100px" onClick={()=>{updateDisplayCount(reviewDisplayCount+2)}}>More Reviews, Please</Button>
    </div>
  )
}