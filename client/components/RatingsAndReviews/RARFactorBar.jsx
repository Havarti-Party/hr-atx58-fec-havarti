import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function FactorBar(props) {

  const marks = [
    {
      value: 0,
      label: props.factors[0],
    },
    {
      value: 25,
      label: props.factors[1],
    },
    {
      value: 50,
      label: props.factors[2],
    },
    {
      value: 75,
      label: props.factors[3],
    },
    {
      value: 100,
      label: props.factors[4],
    },
  ];

  return (
    <>
      <Typography>{props.name}:</Typography>
      <Slider
      disabled
      key={props.propKey}
      defaultValue={Number(props.propValue) * 20}
      step={20}
      marks={marks}
      valueLabelDisplay="off"
      aria-labelledby="reviewFactorSlider" />
    </>
  )
}

FactorBar.propTypes = {
  factors: PropTypes.array,
  product_id: PropTypes.number,
  propKey: PropTypes.number,
  name: PropTypes.string,
  propValue: PropTypes.string,
}