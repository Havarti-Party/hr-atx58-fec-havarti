import React, { useState, useEffect } from 'react';
import sampleReview from './RARsampleReview.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ReviewSorter(props) {

  // const [sorter, setSorter] = useState(true);

  var numReviews = props.currentReviews.results.length;

  const handleChange = (event) => {
    props.setSorter(event.target.value);
    if (event.target.value === 'most recent') {
      sortedResults.sort(function(a, b) {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      })
    }
    if (event.target.value === 'most helpful') {
      sortedResults.sort(function(a, b) {
        if (a.helpfulness > b.helpfulness) {
          return -1;
        }
        if (a.helpfulness < b.helpfulness) {
          return 1;
        }
        return 0;
      })
    }
    if (event.target.value === 'relevance') {
      sortedResults.sort(function(a, b) {
        console.log(a.date - b.date);
        if (a.helpfulness > b.helpfulness) {
          return -1;
        }
        if (a.helpfulness < b.helpfulness) {
          return 1;
        }
        return 0;
      })
    }
    props.setCurrentReviews({
      ...props.currentReviews,
      results: sortedResults
    });
    console.log(sortedResults);
  };

  var sortedResults = [];
  props.currentReviews.results.map((result) => {
    sortedResults.push(result);
  })

  // useEffect(() => {
  //   props.setCurrentReviews({
  //       ...props.currentReviews,
  //       results: sortedResults
  //     });
  // }, [props.sortedResults])


  // var sortByDate = function(a, b) {
  //   console.log(a);
  //   console.log(b);
  //   var aDate = a.date;
  //   var bDate = b.date;
  //   if (aDate > bDate) {
  //     return -1;
  //   }
  //   if (aDate < bDate) {
  //     return 1;
  //   }
  //   return 0;
  // }


  return (
    <div>
      {numReviews} reviews, sorted by
      <Box sx={{ minWidth: 60 }}>
        <FormControl fullWidth>
          <InputLabel id="reviewSorter"></InputLabel>
          <Select
            labelId="reviewSorterLabel"
            id="reviewSorterSelect"
            value={props.sorter}
            label="Sorter"
            onChange={handleChange}
          >
            <MenuItem value={'relevance'}>relevance</MenuItem>
            <MenuItem value={'most recent'}>most recent</MenuItem>
            <MenuItem value={'most helpful'}>most helpful</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}