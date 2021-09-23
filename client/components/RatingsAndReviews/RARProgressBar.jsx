import React, { useState } from 'react';

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