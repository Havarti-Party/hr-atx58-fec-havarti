import React from 'react';
import AverageStarRating from './AverageStarRating';
import Grid from '@material-ui/core/Grid';
const _ = require('underscore');


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
      {sampleReview.count} reviews, sorted by relevance
      {/* <img src="/Images/ratingsreviewsorter.png" className="RARTestImage"></img> */}
    </div>
  )
}

var ReviewDisplay = (props) => {
  return (
    <div>
      {sampleReview.results.map(review => {
        return(
          <div>
            <ReviewTile key={review.review_id} date={review.date} title={review.summary} body={review.body} /><br />
          </div>
        )
      })}
    </div>
  )
}

var ReviewTile = (props) => {
  return (
    <div>
      <AverageStarRating />
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </div>
  )
}

var sampleReview = {
  "product": "38322",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 604243,
          "rating": 5,
          "summary": "This product was great!",
          "recommend": true,
          "response": "",
          "body": "I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.",
          "date": "2019-01-01T00:00:00.000Z",
          "reviewer_name": "funtime",
          "helpfulness": 20,
          "photos": []
      },
      {
          "review_id": 604244,
          "rating": 4,
          "summary": "This product was ok!",
          "recommend": false,
          "response": "",
          "body": "I really did not like this product solely because I am tiny and do not fit into it.",
          "date": "2019-01-11T00:00:00.000Z",
          "reviewer_name": "mymainstreammother",
          "helpfulness": 11,
          "photos": []
      },
      {
          "review_id": 820862,
          "rating": 5,
          "summary": "This is a Test Review",
          "recommend": true,
          "response": null,
          "body": "The testiest of reviews.",
          "date": "2021-09-10T00:00:00.000Z",
          "reviewer_name": "testuser",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 840836,
          "rating": 4,
          "summary": "When in doubt ...",
          "recommend": false,
          "response": null,
          "body": "... Review the 30-day return policy!",
          "date": "2021-09-14T00:00:00.000Z",
          "reviewer_name": "MostUnlikely",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1595307,
                  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ]
      },
      {
          "review_id": 820861,
          "rating": 5,
          "summary": "This is a Test Review",
          "recommend": true,
          "response": null,
          "body": "The testiest of reviews.",
          "date": "2021-09-10T00:00:00.000Z",
          "reviewer_name": "testuser",
          "helpfulness": 0,
          "photos": []
      }
  ]
};