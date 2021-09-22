import React, { useState, useRef, useEffect, createContext, useContext }from 'react';
import axios from 'axios';

import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';
import { makeStyles } from '@material-ui/core/styles';

const questionStyles = makeStyles({
  questionTile: {
    margin: '10px',
    // height: '400px',
    // overflow: 'auto',
  }
})

export const AnswersContext = createContext();
//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style, product_id}) {
  const classes = questionStyles();
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

  return (
    <div id='question' className={classes.questionTile}>
      <span>
        <h3>Q: {question.question_body}?</h3>
        <span>Helpful? <a href='' onClick={incrementHelpfulCount}>yes ({questionHelpfulCount})</a> | <AnswerModal questionId={question.question_id} product_id={product_id}/></span>
      </span>
      <div id='answerList'>
        <AnswerList answers={answers} style={style} product_id={product_id} />
      </div>
    </div>
  )
}