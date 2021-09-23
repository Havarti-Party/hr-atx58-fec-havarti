import React from 'react';
import PropTypes from 'prop-types';


export default function ProgressBar(props) {
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

ProgressBar.propTypes = {
  currentReviews: PropTypes.object,
  starRating: PropTypes.number,
  ratePercent: PropTypes.number,
}