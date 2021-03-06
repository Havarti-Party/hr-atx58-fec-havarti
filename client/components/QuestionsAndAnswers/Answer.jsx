import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const AnswerStyles = makeStyles({
  report: {
    color: 'red',
  }
})

export default function Answer({answerData}) {
  const classes = AnswerStyles()
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness)
  const [ markHelpful, setMarkHelpful ] = useState(false);
  const [ reported, setReported ] = useState(false);


  function incrementHelpfulCount(e) {
    e.preventDefault();
    setHelpfulCount(prevCount => prevCount + 1);
    setMarkHelpful(true);
    axios.post('/qa/answerHelpfulness', {
      answer_id: answerData.id
    })
    .then(() => {
    })
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }


  function handleReport(e) {
    e.preventDefault();
    setReported(true);
    axios.post('/qa/reportAnswer', {
      answer_id: answerData.id,
    })
    .then()
    .catch(error => {
      console.error(error)
    })
  }

  //conditional based on if the answer came from the Seller: make the name say seller and BOLD it
  //additional conditional based on if its the first answer/top answer in the list
  // if (answerData.answerer_name === 'Seller') {
  //   console.log('bold this name')
  // }
  return (
    <Grid container spacing={2}>
      <Grid item lg={8}>
        <Typography variant='h5'>A: {answerData.body}</Typography >
        <div>
          {answerData.photos.map((image, index) => {
            var tempIndex = image.indexOf('crop') + 4;
            var slicedUrl = image.slice(0, tempIndex);
            var newUrl = (slicedUrl + '&w=100&q=80')
            return <img src={newUrl} key={index} />
          })}
        </div>
        <span>
          <Typography variant='body1'>by: {answerData.answerer_name}, {answerData.date.slice(0, 10)} | Helpful?:
            <Button
              onClick={incrementHelpfulCount}
              variant='text' color='primary'
              disabled={markHelpful ? true : false}>
                 yes ({helpfulCount})
            </Button>
            <Button
              onClick={handleReport}
              className={classes.report}
              variant='text'
              disabled={reported ? true : false}>
                report
            </Button>
          </Typography>
        </span>
        <br/>
      </Grid>
    </Grid>
  )
}

Answer.propTypes = {
  answerData: PropTypes.object,
  product_id: PropTypes.number
}