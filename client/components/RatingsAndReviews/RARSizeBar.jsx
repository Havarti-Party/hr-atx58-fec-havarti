import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

export default function SizeBar(props) {
  const marks = [
    {
      value: 16,
      label: 'Too small',
    },
    {
      value: 33,
      label: 'Slighty small',
    },
    {
      value: 50,
      label: 'Perfect',
    },
    {
      value: 66,
      label: 'Slightly big',
    },
    {
      value: 83,
      label: 'Too big',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  // <div>
  //   <img src="/Images/ratingssizebar.png"></img>
  // </div>
  return (
    <Slider
    disabled
    defaultValue={30}
    step={10}
    marks={marks}
    valueLabelDisplay="auto"
    aria-labelledby="disabled-slider" />
  )
}