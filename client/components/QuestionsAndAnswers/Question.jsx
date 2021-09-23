import React, { useState, createContext }from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const questionStyles = makeStyles({
  questionTile: {
    margin: '10px',
  }
})

export const AnswersContext = createContext();
//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style, product_id}) {
  const classes = questionStyles();
  // eslint-disable-next-line no-unused-vars
  const [answers, setAnswers] = useState(Object.values(question.answers).sort((a, b) => {return b.helpfulness - a.helpfulness}))
  const [questionHelpfulCount, setQuestionHelpfulCount] = useState(question.question_helpfulness)

  function incrementHelpfulCount(e) {
    //limit to one click
    e.preventDefault();
    setQuestionHelpfulCount(prevCount => prevCount + 1);
    axios.post('/qa/questionHelpfulness', {
      questionId: question.question_id,
    })
    .then()
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }

  function handleReport(e) {
    e.preventDefault();
    axios.post('/qa/reportQuestion', {
      question_id: question.question_id,
    })
    .then(() => {
      window.alert('You\'ve successfully reported this Question. We will remove this as soon as possible')
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div id='question' className={classes.questionTile}>
      <span>
        <h3>Q: {question.question_body}?</h3>
        <span>Helpful? <Button onClick={incrementHelpfulCount} variant='text' color='primary'>yes ({questionHelpfulCount})</Button> | <AnswerModal questionId={question.question_id} product_id={product_id}/></span>
        <a href='' onClick={handleReport}className={classes.report}>report question</a>
      </span>
      <div id='answerList'>
        <AnswerList answers={answers} style={style} product_id={product_id} />
      </div>
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.object,
  style: PropTypes.object,
  product_id: PropTypes.number,
}