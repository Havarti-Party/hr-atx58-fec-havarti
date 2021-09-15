import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

export default function ReviewTile(props) {
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
      <div>Helpful? {props.helpfulness}</div>
    </div>
  )
}