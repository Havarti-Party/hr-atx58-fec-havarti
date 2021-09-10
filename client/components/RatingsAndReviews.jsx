import React from 'react';

export default function RatingsAndReviews(props) {
  return (
    <>
    <h3>Ratings And Reviews</h3>
    <div>100% of reviews recommend this product</div>
    <RatingBreakdownBars />
    <SizeBar />
    <ComfortBar />
    <ReviewSorter />
    <ReviewDisplay />
    </>
  )
}

var RatingBreakdownBars = (props) => {
  return (
    <div>This is where the breakdown bars go</div>
  )
}

var SizeBar = (props) => {
  return (
    <div>This is where the size bar goes</div>
  )
}

var ComfortBar = (props) => {
  return (
    <div>This is where the comfort bar goes</div>
  )
}

var ReviewSorter = (props) => {
  return (
    <div>This is where the review sorter goes</div>
  )
}

var ReviewDisplay = (props) => {
  return (
    <>
    <div>This is where the review display goes</div>
    <ReviewTile />
    <ReviewTile />
    </>
  )
}

var ReviewTile = (props) => {
  return (
    <div>This is a review tile</div>
  )
}