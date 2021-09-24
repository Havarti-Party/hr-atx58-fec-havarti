import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

export default function RenderCharacteristics(props) {

  var characteristicsToRender = [];

  // useEffect(()=>{
    Object.keys(props.currentReviews.characteristics).map((characteristic, index) => {
      if (characteristic === "Size") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the size of this product?</FormLabel>
            <RadioGroup aria-label='reviewSize' defaultValue='3' name={props.currentReviews.characteristics.Comfort.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='A size too small' />
              <FormControlLabel value='2' control={<Radio />} label='½ a size too small' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='½ a size too big' />
              <FormControlLabel value='5' control={<Radio />} label='A size too big' />
            </RadioGroup>
          </FormControl>
        )
      }
      if (characteristic === "Width") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the width of this product?</FormLabel>
            <RadioGroup aria-label='reviewWidth' defaultValue='3' name={props.currentReviews.characteristics.Width.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='Too narrow' />
              <FormControlLabel value='2' control={<Radio />} label='Slightly narrow' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Slightly wide' />
              <FormControlLabel value='5' control={<Radio />} label='Too wide' />
            </RadioGroup>
          </FormControl>
        )
      }
      if (characteristic === "Comfort") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the comfort of this product?</FormLabel>
            <RadioGroup aria-label='reviewComfort' defaultValue='5' name={props.currentReviews.characteristics.Comfort.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='Uncomfortable' />
              <FormControlLabel value='2' control={<Radio />} label='Slightly uncomfortable' />
              <FormControlLabel value='3' control={<Radio />} label='OK' />
              <FormControlLabel value='4' control={<Radio />} label='Comfortable' />
              <FormControlLabel value='5' control={<Radio />} label='Perfect' />
            </RadioGroup>
          </FormControl>
        )
      }
      if (characteristic === "Quality") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the quality of this product?</FormLabel>
            <RadioGroup aria-label='reviewQuality' defaultValue='5' name={props.currentReviews.characteristics.Quality.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='Poor' />
              <FormControlLabel value='2' control={<Radio />} label='Below Average' />
              <FormControlLabel value='3' control={<Radio />} label='What I expected' />
              <FormControlLabel value='4' control={<Radio />} label='Pretty great' />
              <FormControlLabel value='5' control={<Radio />} label='Perfect' />
            </RadioGroup>
          </FormControl>
        )
      }
      if (characteristic === "Fit") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the fit of this product?</FormLabel>
            <RadioGroup aria-label='reviewFit' defaultValue='3' name={props.currentReviews.characteristics.Fit.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='Runs tight' />
              <FormControlLabel value='2' control={<Radio />} label='Runs slightly tight' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Runs slightly long' />
              <FormControlLabel value='5' control={<Radio />} label='Runs long' />
            </RadioGroup>
          </FormControl>
        )
      }
      if (characteristic === "Length") {
        characteristicsToRender.push(
          <FormControl key={index} required component='fieldset'>
            <FormLabel component='legend'>How would you rate the length of this product?</FormLabel>
            <RadioGroup aria-label='reviewLength' defaultValue='3' name={props.currentReviews.characteristics.Length.id.toString()} onChange={props.handleCharacteristic}>
              <FormControlLabel value='1' control={<Radio />} label='Runs short' />
              <FormControlLabel value='2' control={<Radio />} label='Runs slightly short' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Runs slightly long' />
              <FormControlLabel value='5' control={<Radio />} label='Runs long' />
            </RadioGroup>
          </FormControl>
        )
      }
    })

    return (
      <>
        {characteristicsToRender}
      </>
    )
  // },[props.currentReviews])
}

RenderCharacteristics.propTypes = {
  currentReviews: PropTypes.object,
  handleCharacteristic: PropTypes.func,
}