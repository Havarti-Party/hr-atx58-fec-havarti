import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
const axios = require('axios');

export default function ReviewTile(props) {

  const [clicked, setClicked] = useState(false);
  const [review, setReview] = useState({
    body: props.body,
    date: props.date,
    helpfulness: props.helpfulness,
    photos: props.photos,
    rating: props.rating,
    recommend: props.recommend,
    response: props.response,
    review_id: props.review_id,
    reviewer_name: props.reviewer_name,
    summary: props.summary
  });

 useEffect(()=>{
   setReview({
    body: props.body,
    date: props.date,
    helpfulness: props.helpfulness,
    photos: props.photos,
    rating: props.rating,
    recommend: props.recommend,
    response: props.response,
    review_id: props.review_id,
    reviewer_name: props.reviewer_name,
    summary: props.summary
   })
 }, [props.review_id]);

  var handleClick= () => {
    if (!clicked) {
      setReview({
        ...review,
        recommend: review.recommend + 1
      });
        setClicked(true);
      axios.put('/reviews/put', review)
      .catch((error) => {
        console.log('Error putting data.')
      })
    }
  }

  return (
    <div>
      <StarRatings rating={props.rating} starDimension={'15px'} starSpacing={'1px'}/>
      <div>User: {props.reviewer_name}</div>
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.body}</div>
      {props.photos.map((photo, index) => {
        return(
          <img key={index} src={photo}></img>
        )
      })}
      {props.response !== null && props.response.length > 0 &&
        <div>Staff response: {props.response}</div>
      }
      <Button variant="text" color="primary" onClick={handleClick}>Was this helpful?
        {!clicked ? (<ThumbUpOffAlt />) : (<ThumbUpAlt />)}{review.helpfulness}</Button>
    </div>
  )
}