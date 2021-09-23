import React, { useState, useContext, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { QuestionsContext } from './QuestionsAndAnswers.jsx';

export default function ExpandQuestions({questions, currentQuestions, style}) {

  const [questionDisplayCount, setQuestionDisplayCount] = useContext(QuestionsContext)

  function expandQuestionsButton() {
    setQuestionDisplayCount(questionDisplayCount + 2)
  }
  function collapseQuestionsButton() {
    setQuestionDisplayCount(2)
  }


  if (questions.length > currentQuestions.length) {
    return (
      <div>
        <Button id='expandQuestions' variant='contained' onClick={expandQuestionsButton} className={style.button}>More Answered Questions</Button>
      </div>
    )
  } else {
    return (
      <div>
        {/* <Button id='collapseQuestions' variant='contained' onClick={collapseQuestionsButton} className={style.button}>Collapse Answered Questions</Button> */}
      </div>
    )
  }
}