import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-undef
const axios = require('axios');
import Typography from "@mui/material/Typography";

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
   console.log(new Date(props.date).toDateString());
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
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('Error putting data.')
      })
    }
  }

  return (
    <div>
      <StarRatings rating={props.rating} starDimension={'15px'} starSpacing={'1px'}/>
      <Typography>User: {props.reviewer_name}</Typography>
      <Typography variant="caption">{new Date(props.date).toDateString()}</Typography>
      <Typography>{props.title}</Typography>
      <Typography>{props.body}</Typography>
      {props.photos.map((photo, index) => {
        return(
          <img key={index} src={photo}></img>
        )
      })}
      {props.response !== null && props.response.length > 0 &&
        <Typography>Staff response: {props.response}</Typography>
      }
      <Button variant="text" color="primary" onClick={handleClick}>Was this helpful?
        {!clicked ? (<ThumbUpOffAlt />) : (<ThumbUpAlt />)}{review.helpfulness}</Button>
    </div>
  )
}

ReviewTile.propTypes = {
  currentReviews: PropTypes.object,
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
  photos: PropTypes.array,
  rating: PropTypes.number,
  recommend: PropTypes.bool,
  response: PropTypes.string,
  review_id: PropTypes.number,
  reviewer_name: PropTypes.string,
  summary: PropTypes.string,
  title: PropTypes.string
}