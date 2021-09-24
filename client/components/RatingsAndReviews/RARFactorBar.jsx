import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export default function FactorBar(props) {

  const FactorSlider = withStyles({
    root: {
      width: '400px',
      color: '#52af77',
      height: 8,
    },
    thumb: {
      backgroundColor: '#bdbdbd',
      borderRadius: '0',
      borderBottom: '10px solid #4E5255',
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '1px solid transparent',
      transform: 'rotate(180deg)',
      },
    active: {},
    track: {
      display: 'none',
    },
    rail: {
      height: 8,
      borderRadius: 4,
      opacity: 1
    },
  })(Slider);

  const marks = [
    {
      value: 15,
      label: props.factors[0],
    },
    {
      value: 50,
      label: '',
    },
    {
      value: 90,
      label: props.factors[4],
    },
  ];

  return (
    <>
      <Typography>{props.name}:</Typography>
      <FactorSlider
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