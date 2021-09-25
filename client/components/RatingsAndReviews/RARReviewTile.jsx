import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-undef
const axios = require('axios');
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('Error putting data.')
      })
    }
  }

  var dateString = () => {
    var day = new Date(props.date).toDateString();
    var hour = new Date(props.date).getHours().toString();
    var minute = new Date(props.date).getMinutes().toString();
    // var second = new Date(props.date).getSeconds().toString();
    var ampm = hour > 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;
    // second = second < 10 ? '0' + second : second;
    return day + ' ' + hour + ':' + minute + ' ' + ampm;
  }

  return (
    <div style={{marginTop: "8px", clear:"both"}}>
      <StarRatings rating={props.rating} starDimension={'20px'} starSpacing={'1px'} starRatedColor={'gold'} />
      <RecommendCheckmark recommend={props.recommend} />
      <Typography fontSize="16px">By <Typography fontSize="16px" fontStyle="italic" display="inline">{props.reviewer_name}</Typography></Typography>
      <Typography variant="caption">{dateString()}</Typography>
      <Typography>{props.title}</Typography>
      <Typography style={{marginTop: "15px", marginBottom: "15px"}}>{props.body}</Typography>
      {props.photos.map((photo, index) => {
        return(
          <img key={index} src={photo.url} style={{maxWidth:"400px"}}></img>
        )
      })}
      {props.response !== null && props.response.length > 0 &&
        <Typography>Staff response: {props.response}</Typography>
      }
      <Button variant="text" color="primary" onClick={handleClick} style={{positon: "relative", left:"-10px"}}>Was this helpful?
        {!clicked ? (<ThumbUpOffAlt />) : (<ThumbUpAlt />)}{review.helpfulness}</Button>
    </div>
  )
}

var RecommendCheckmark = (props) => {
  if (props.recommend) {
    return (
      <span>
        <Typography style={{float:"right"}}>&nbsp;I recommend this product!</Typography>
        <CheckCircleOutlineIcon color="primary" style={{float:"right"}}/>
      </span>
    )
  } else {
    return null;
  }
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

RecommendCheckmark.propTypes = {
  recommend: PropTypes.bool,
}