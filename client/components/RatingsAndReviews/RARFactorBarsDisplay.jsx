import React from 'react';
import FactorBar from './RARFactorBar.jsx';
import PropTypes from 'prop-types';


var sizeFactors = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];
var widthFactors = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
var comfortFactors = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
var qualityFactors = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
var lengthFactors = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
var fitFactors = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

export default function FactorBars(props) {

  var characteristicsToRender = [];
  if (Object.keys(props.currentReviews.characteristics).length > 0) {
    Object.keys(props.currentReviews.characteristics).map((characteristic, index) => {
      var value = props.currentReviews.characteristics[characteristic].value;
      var factors = '';
      if (value !== null) {
        if (characteristic === "Size") {
          factors = sizeFactors;
        }
        if (characteristic === "Width") {
          factors = widthFactors;
        }
        if (characteristic === "Comfort") {
          factors = comfortFactors;
        }
        if (characteristic === "Quality") {
          factors = qualityFactors;
        }
        if (characteristic === "Length") {
          factors = lengthFactors;
        }
        if (characteristic === "Fit") {
          factors = fitFactors;
        }
        characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={factors} propValue={value} />);
      }
    })
  } else {
    characteristicsToRender.push(null);
  }
  return (
    <>
      {characteristicsToRender}
    </>
  )
}

FactorBars.propTypes = {
  currentReviews: PropTypes.object,
}