import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const AnswerStyles = makeStyles({
  report: {
    color: 'red',
  }
})

export default function Answer({answerData}) {
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness)
  const classes = AnswerStyles()

  function incrementHelpfulCount(e) {
    e.preventDefault();
    setHelpfulCount(prevCount => prevCount + 1);
    axios.post('/qa/answerHelpfulness', {
      answer_id: answerData.id
    })
    .then()
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }


  function handleReport(e) {
    e.preventDefault();
    axios.post('/qa/reportAnswer', {
      answer_id: answerData.id,
    })
    .then(() => {
      window.alert('You\'ve successfully reported this Answer. We will remove this as soon as possible')
    })
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
    <div className='answer'>
      <h3>A: {answerData.body}</h3>
      <div>
        {answerData.photos.map((image, index) => {
          var tempIndex = image.indexOf('crop') + 4;
          var slicedUrl = image.slice(0, tempIndex);
          var newUrl = (slicedUrl + '&w=100&q=80')
          return <img src={newUrl} key={index} />
        })}
      </div>
      <span>
        <p>by: {answerData.answerer_name}, {answerData.date.slice(0, 10)} | answer helpfulness:
          <a href='' onClick={incrementHelpfulCount}>yes ({helpfulCount})</a> ||
          <br />
          <a href='' onClick={handleReport}className={classes.report}>report</a>
        </p>
      </span>
      <br/>
    </div>
  )
}

Answer.propTypes = {
  answerData: PropTypes.object,
  product_id: PropTypes.number
}