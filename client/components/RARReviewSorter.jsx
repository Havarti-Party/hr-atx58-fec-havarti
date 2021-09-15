import React, { useState } from 'react';
import sampleReview from './RARsampleReview.jsx';

export default function ReviewSorter(props) {
  return (
    <div>
      {sampleReview.count} reviews, sorted by relevance
    </div>
  )
}