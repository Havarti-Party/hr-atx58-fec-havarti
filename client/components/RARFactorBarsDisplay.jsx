import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import FactorBar from './RARFactorBar.jsx';
const _ = require("underscore");


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
      if (characteristic === "Size") {
        if (value !== null) {
          characteristicsToRender.push(<FactorBar key={index} propKey = {index} name={characteristic} factors={sizeFactors} value={value}/>);
        }
      }
      if (value !== null) {
        if (characteristic === "Width") {
          characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={widthFactors} value={value} />);
      }
      }
      if (characteristic === "Comfort") {
        if (value !== null) {
          characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={comfortFactors} value={value} />);
        }
      }
      if (characteristic === "Quality") {
        if (value !== null) {
          characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={qualityFactors} value={value} />);
        }
      }
      if (characteristic === "Length") {
        if (value !== null) {
          characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={lengthFactors} value={value} />);
        }
      }
      if (characteristic === "Fit") {
        if (value !== null) {
          characteristicsToRender.push(<FactorBar key={index} name={characteristic} factors={fitFactors} value={value} />);
        }
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