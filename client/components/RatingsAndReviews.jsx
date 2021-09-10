import React from 'react';

export default function RatingsAndReviews(props) {
  return (
    <>
    <h3>Ratings And Reviews</h3>
    <div>100% of reviews recommend this product</div>
    <RatingBreakdownBars /><br />
    <SizeBar /><br />
    <ComfortBar /><br />
    <ReviewSorter /><br />
    <ReviewDisplay />
    </>
  )
}

var RatingBreakdownBars = (props) => {
  return (
    <img src="/Images/ratingsbreakdownbars.png"></img>
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