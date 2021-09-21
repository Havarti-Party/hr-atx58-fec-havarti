import React, { useState, useRef, useEffect }from 'react';
import AnswerList from './AnswerList.jsx';
import { makeStyles } from '@material-ui/core/styles';

const questionStyles = makeStyles({
  questionTile: {
    margin: '10px',
    height: '400px',
    overflow: 'auto',
  }
})

//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style}) {
  const classes = questionStyles();
  const [answers, setAnswers] = useState(Object.values(question.answers).sort((a, b) => {return b.helpfulness - a.helpfulness}))
  const [questionHelpfulCount, setQuestionHelpfulCount] = useState(question.question_helpfulness)

  // const isMounted = useRef(false);
  // console.log(answers[0].helpfulness)
  // console.log(answers[1].helpfulness)
  // console.log(answers.sort((a, b) => {return b.helpfulness - a.helpfulness}))
  // useEffect(() => {
  //   if (isMounted.current) {
  //     setAnswers(answers.sort((a, b) => { a.helpfulness - b.helpfulness }))

  //   } else {
  //     isMounted.current = true;
  //   }
  // }, )

  function incrementHelpfulCount() {
    setQuestionHelpfulCount(prevCount => prevCount + 1);
  }

  function decrementHelpfulCount() {
    setQuestionHelpfulCount(prevCount => prevCount - 1);
  }

  return (
    <div id='question' className={classes.questionTile}>
      <div>
        <h3>Q: {question.question_body}?</h3>
        <span>Helpful? <a href='' onClick={() => incrementHelpfulCount()}>yes ({questionHelpfulCount})</a>/<a href='' onClick={() => decrementHelpfulCount()}>no</a></span>
      </div>
      <div id='answerList'>
        <AnswerList answers={answers} style={style}/>
      </div>
    </div>
  )
}