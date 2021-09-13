import React from 'react';
import AverageStarRating from './AverageStarRating';

export default function RatingsAndReviews(props) {
  return (
    <>
    <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
    <div>100% of reviews recommend this product</div>
    {/* Note: AverageStarRating is going to need input later */}
    <AverageStarRating />
    <RatingBreakdownBars /><br />
    <SizeBar /><br />
    <ComfortBar /><br />
    <ReviewSorter /><br />
    <ReviewDisplay />
    </>
  )
}

var RatingBreakdownBars = (props) => {
  var starArray = [1, 2, 3, 4, 5];
  return (
    <>
      {/* <img src="/Images/ratingsbreakdownbars.png"></img> */}
      {starArray.map(starRating => {
        return (
          <ProgressBar starRating={starRating}/>
        )
      })}
    </>
  )
}

var ProgressBar = (props) => {
  return (
    <div>This is where a {props.starRating}-star progress bar would go</div>
  )
}

var SizeBar = (props) => {
  return (
    <img src="/Images/ratingssizebar.png"></img>
  )
}

var ComfortBar = (props) => {
  return (
    <img src="/Images/ratingscomfortbar.png"></img>
  )
}

var ReviewSorter = (props) => {
  return (
    <img src="/Images/ratingsreviewsorter.png"></img>
  )
}

var ReviewDisplay = (props) => {
  return (
    <>
    <img src="/Images/ratingsreviewdisplay.png"></img>
    {/* <ReviewTile />
    <ReviewTile /> */}
    </>
  )
}

// var ReviewTile = (props) => {
//   return (
//     <div>This is a review tile</div>
//   )
// }