import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";
import { ProductsContext } from "../ProductsContext.jsx";

export default function ReviewSorter(props) {

  var numReviews = props.currentReviews.results.length;

  const { clickTracker } = useContext(ProductsContext);
  const [clickTrackerFunc] = clickTracker;

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
      // 'Relevance' prioritizes helpfulness, but only if a more helpful post
      // is less than a year older than the next post.

      sortedResults.sort(function(a, b) {
        if (a.helpfulness > b.helpfulness) {
          if (Date.parse(b.date) - Date.parse(a.date) >= 31556952000) {
            return 1;
          } else {
            return -1;
          }
        }
        if (a.helpfulness < b.helpfulness) {
          if (Date.parse(b.date) - Date.parse(a.date) >= 31556952000) {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      })
    }
    props.setCurrentReviews({
      ...props.currentReviews,
      results: sortedResults
    });
  };

  var sortedResults = [];
  props.currentReviews.results.map((result) => {
    sortedResults.push(result);
  })

  return (
    
    <div onClick={() =>
      clickTrackerFunc.clickTrackerFunc("Review Sorter", event.target)
    }>
      <Typography style={{float:"left"}}>{numReviews} reviews, sorted by&nbsp;</Typography>
      <Box sx={{ minWidth: 150, maxWidth: 500, float:"left", position:"relative", top:"-15px" }}>
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

ReviewSorter.propTypes = {
  currentReviews: PropTypes.object,
  setSorter: PropTypes.func,
  setCurrentReviews: PropTypes.func,
  sorter: PropTypes.string
}