import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';


export default function ProgressBar(props) {

  var starSort = () => {
    console.log('Clicked!');
  }

  return (
    <div>
      <span onClick={() => {starSort()}}>{props.starRating} stars: </span>
      {/* <div className='RARProgressBarContainer'>
        <div className='RARProgressBarFiller' style={{width: `${props.ratePercent}%`}}>
          <div>&nbsp;</div>
        </div>
      </div> */}
      <Slider
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