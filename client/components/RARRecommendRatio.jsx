import React, { useState, useContext, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';

export default function RecommendRatio(props) {

var recommendRatio = 0;

if (props.currentReviews.recommended) {
  recommendRatio = (100 * Number(props.currentReviews.recommended.true) / (Number(props.currentReviews.recommended.true) + Number(props.currentReviews.recommended.false)));
  } else {
    recommendRatio = 0;
  }

if (isNaN(recommendRatio)) {
  recommendRatio = 0;
}

  return (
    <Typography>{recommendRatio.toFixed(2)}% of reviews recommend this product</Typography>
    )
  }