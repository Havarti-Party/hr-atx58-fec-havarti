import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import Grid from '@material-ui/core/Grid';

export default function RatingsAndReviews(props) {
  const [averageStarRating, updateAverageStarRating] = useState(0);
  return (
  <>
    <h3 id='ratings-and-reviews'>Ratings And Reviews</h3>
    <Grid container spacing={6}>
      <Grid item m={6} className="RARLeftColumn">
        <div>100% of reviews recommend this product</div>
        <StarRatings rating={averageStarRating} starDimension={'15px'} starSpacing={'1px'}/>
        <RatingBreakdownBars updateAverageStarRating = {updateAverageStarRating}/>
        <SizeBar />
        <ComfortBar />
      </Grid>
      <Grid item m={6} className="RARRightColumn">
        <ReviewSorter />
        <ReviewDisplay />
      </Grid>
    </Grid>
    </>
  )
}

var RatingBreakdownBars = (props) => {
  var starArray = [1, 2, 3, 4, 5];
  var starBreakdown = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  var numReviews = sampleReview.results.length;
  sampleReview.results.map(review => {
    starBreakdown[review.rating]++;
  });
  var percentBreakdown = {
    1: starBreakdown[1] / numReviews * 100,
    2: starBreakdown[2] / numReviews * 100,
    3: starBreakdown[3] / numReviews * 100,
    4: starBreakdown[4] / numReviews * 100,
    5: starBreakdown[5] / numReviews * 100
  }
  var newAverageStarRating = 0;
  for (var key in starBreakdown) {
    newAverageStarRating += key * starBreakdown[key];
  }
  newAverageStarRating /= numReviews;
  console.log(`New average star rating: ${newAverageStarRating}`);
  props.updateAverageStarRating(newAverageStarRating);
  return (
    <div>
      <ProgressBar starRating={1} ratePercent={percentBreakdown[1]}/>
      <ProgressBar starRating={2} ratePercent={percentBreakdown[2]}/>
      <ProgressBar starRating={3} ratePercent={percentBreakdown[3]}/>
      <ProgressBar starRating={4} ratePercent={percentBreakdown[4]}/>
      <ProgressBar starRating={5} ratePercent={percentBreakdown[5]}/>
      {/* {starArray.map(starRating => {
        return (
          <ProgressBar key={starRating} starRating={starRating} ratePercent={ratePercent}/>
        )
      })} */}
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
    </div>
  )
}

var ReviewDisplay = (props) => {
  return (
    <div>
      {sampleReview.results.map((review, index) => {
        return(
          <div>
            <ReviewTile key={index} {...review}/><br />
          </div>
        )
      })}
    </div>
  )
}

var ReviewTile = (props) => {
  return (
    <div>
      <StarRatings rating={props.rating} starDimension={'15px'} starSpacing={'1px'}/>
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.body}</div>
      {props.photos.map((photo, index) => {
        return(
          <img key={index} src={photo}></img>
        )
      })}
      <div>Helpful? {props.helpfulness}</div>
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