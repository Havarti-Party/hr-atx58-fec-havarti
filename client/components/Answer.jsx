import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import QuestionsContext from './QuestionsAndAnswers.jsx';

const AnswerStyles = makeStyles({
  report: {
    color: 'red',
  }
})

export default function Answer({answerData, product_id}) {
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness)
  // const [questions, setQuestions] = useContext(QuestionsContext)
  const classes = AnswerStyles()
  //eventually these buttons will send axios requests to UPDATE this information in the api/database
  function incrementHelpfulCount(e) {
    e.preventDefault();
    setHelpfulCount(prevCount => prevCount + 1);
    axios.post('/qa/answerHelpfulness', {
      answer_id: answerData.id
    })
    .then(response => {
    })
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }

  //conditional based on if the answer came from the Seller: make the name say seller and BOLD it
  //additional conditional based on if its the first answer/top answer in the list
  function handleReport(e) {
    e.preventDefault();
    window.alert('You\'ve successfully reported this Answer. We will review this as soon as possible')
    axios.post('/qa/reportAnswer', {
      answer_id: answerData.id,
    })
    .then(response => {
      window.alert('You\'ve successfully reported this Answer. We will review this as soon as possible')
      // axios.get('/qa', {
      //   params: {
      //     id: product_id,
      //   }})
      //   .then(response => {
      //     var newQuestions = response.data.results
      //     setQuestions(newQuestions.sort((a, b) => {
      //       a.question_helpfulness - b.question_helpfulness
      //     }));
      //   })
    })
    .catch(error => {
      console.log('error', error)
    })
  }

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