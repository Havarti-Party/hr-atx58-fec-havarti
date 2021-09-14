import React from 'react';
import AverageStarRating from './AverageStarRating';
import Grid from '@material-ui/core/Grid';

export default function RatingsAndReviews(props) {
  return (
  <>
    <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
    <Grid container spacing={2}>
      <Grid item m={6} className="RARLeftColumn">
        <div>100% of reviews recommend this product</div>
        <AverageStarRating />
        <RatingBreakdownBars />
        <SizeBar />
        <ComfortBar />
      </Grid>
      <Grid item m={6} className="RARRightColumn">
        <ReviewSorter />
        <ReviewDisplay />
      </Grid>
    </Grid>

    {/* <Grid container spacing={2}>
    <div id='ratings-and-reviews'>
        <Grid item xs={6} sm={6} m={6}>
          <div id='RARLeftColumn'>
            <AverageStarRating /><br />
            <RatingBreakdownBars /><br />
            <SizeBar /><br />
            <ComfortBar /><br />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} m={6}>
          <div id='RARRightColumn'>
            <ReviewSorter /><br />
            <ReviewDisplay />
          </div>
        </Grid>
      </div>
    </Grid> */}
    </>
  )
}

var RatingBreakdownBars = (props) => {
  var starArray = [1, 2, 3, 4, 5];
  var ratePercent = 60;
  return (
    <div>
      {starArray.map(starRating => {
        return (
          <ProgressBar key={starRating} starRating={starRating} ratePercent={ratePercent}/>
        )
      })}
    </div>
  )
}

var ProgressBar = (props) => {
  return (
    <div>
      <span>{props.starRating} stars: </span>
      <div className='RARProgressBarContainer'>
        <div className='RARProgressBarFiller' style={{width: `${props.ratePercent}%`}}>
          <div>&nbsp;</div>
        </div>
      </div><br />
    </div>
  )
}

var SizeBar = (props) => {
  return (
    <div>
      <img src="/Images/ratingssizebar.png"></img>
    </div>
  )
}

var ComfortBar = (props) => {
  return (
    <div>
      <img src="/Images/ratingscomfortbar.png" className="RARTestImage"></img>
    </div>
  )
}

var ReviewSorter = (props) => {
  return (
    <div>
      <img src="/Images/ratingsreviewsorter.png" className="RARTestImage"></img>
    </div>
  )
}

var ReviewDisplay = (props) => {
  return (
    <div>
    <img src="/Images/ratingsreviewdisplay.png" className="RARTestImage"></img>
    {/* <ReviewTile />
    <ReviewTile /> */}
    </div>
  )
}

// var ReviewTile = (props) => {
//   return (
//     <div>This is a review tile</div>
//   )
// }