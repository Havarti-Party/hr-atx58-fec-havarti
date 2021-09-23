import React, { useState, useContext, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { AnswerCountContext } from './AnswerList.jsx';

export default function ExpandAnswers({answers, currentAnswers, style}) {

  const [answerDisplayCount, setAnswerDisplayCount] = useContext(AnswerCountContext)

  function expandAnswersButton() {
    setAnswerDisplayCount(answers.length)
  }
  function collapseAnswersButton() {
    setAnswerDisplayCount(2)
  }

  if (answers.length > currentAnswers.length) {
    return (
      <div>
        <Button id='expandAnswers' variant='contained' color='primary' onClick={expandAnswersButton} className={style.button}>See More Answers</Button>
      </div>
    )
  } else if (answers.length <= 2) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div>
        <Button id='collapseAnswers' variant='contained' onClick={collapseAnswersButton} className={style.button}>Collapse Answers</Button>
      </div>
    )
  }
}