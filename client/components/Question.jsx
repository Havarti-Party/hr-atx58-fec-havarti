import React, { useState }from 'react';
import AnswerList from './AnswerList.jsx';
import {makeStyles} from '@material-ui/core/styles';

const questionStyles = makeStyles({
  questionTile: {
    'border-style': 'solid',
    margin: '10px',
  }
})

//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style}) {
  const classes = questionStyles();
  const [answers, setAnswers] = useState(Object.values(question.answers))

  return (
    <div id='question' className={classes.questionTile}>
      <div>
        <h3>Q: {question.question_body}?</h3>
      </div>
      <div id='answerList'>
        <AnswerList answers={answers} style={style}/>
      </div>
    </div>
  )
}