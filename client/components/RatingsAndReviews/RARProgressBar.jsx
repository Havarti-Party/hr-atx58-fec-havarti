import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';


export default function ProgressBar(props) {

  var starSort = () => {
    console.log('Clicked!');
  }

  const ProgressSlider = withStyles({
    root: {
      width: '400px',
      color: '#52af77',
      height: 8,
    },
    thumb: {
      display: 'none',
    },
    active: {},
    track: {
      height: 8,
      borderRadius: 4,
      color: 'green',
    },
    rail: {
      height: 8,
      borderRadius: 4,
      opacity: 1
    },
  })(Slider);

  return (
    <div>
      <Typography onClick={() => {starSort()}}>{props.starRating} stars: </Typography>
      <ProgressSlider
      disabled
      defaultValue={props.ratePercent}
      valueLabelDisplay="off"
      aria-labelledby="breakdownSlider" />
      <br />
    </div>
  )
}

ProgressBar.propTypes = {
  currentReviews: PropTypes.object,
  starRating: PropTypes.number,
  ratePercent: PropTypes.number,
}