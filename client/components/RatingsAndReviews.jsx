import React from 'react';
import AverageStarRating from './AverageStarRating';

export default function RatingsAndReviews(props) {
  return (
    <div id='ratings-and-reviews'>
      <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
      {/* Note: AverageStarRating is going to need input later */}
      <div id='RARLeftColumn'>
        <div>100% of reviews recommend this product</div>
        <AverageStarRating /><br />
        <RatingBreakdownBars /><br />
        <SizeBar /><br />
        <ComfortBar /><br />
      </div>
      <div id='RARRightColumn'>
        <ReviewSorter /><br />
        <ReviewDisplay />
      </div>
    </div>
  )
}

var RatingBreakdownBars = (props) => {
  var starArray = [1, 2, 3, 4, 5];
  var ratePercent = 60;
  return (
    <>
      {starArray.map(starRating => {
        return (
          <ProgressBar key={starRating} starRating={starRating} ratePercent={ratePercent}/>
        )
      })}
    </>
  )
}

var ProgressBar = (props) => {
  return (
    <>
      <span>{props.starRating} stars: </span>
      <div className='RARProgressBarContainer'>
        <div className='RARProgressBarFiller' style={{width: `${props.ratePercent}%`}}>
          <div>&nbsp;</div>
        </div>
      </div><br />
    </>
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