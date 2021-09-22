import React, { useState, useRef, useEffect }from 'react';
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

//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style, product_id}) {
  const classes = questionStyles();
   //also need to sort by seller responses
  const [answers, setAnswers] = useState(Object.values(question.answers).sort((a, b) => {return b.helpfulness - a.helpfulness}))
  const [questionHelpfulCount, setQuestionHelpfulCount] = useState(question.question_helpfulness)

  function incrementHelpfulCount(e) {
    e.preventDefault();
    //put //how to limit to one time click only
    setQuestionHelpfulCount(prevCount => prevCount + 1); //may not need to do this anymore.
    axios.put('/qa/questionHelpfulness', {
      params: {
        questionId: question.question_id,
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }


  return (
    <div id='question' className={classes.questionTile}>
      <span>
        <h3>Q: {question.question_body}?</h3>
        <span>Helpful? <a href='' onClick={() => incrementHelpfulCount()}>yes ({questionHelpfulCount})</a> | <AnswerModal questionId={question.question_id} product_id={product_id}/></span>
      </span>
      <div id='answerList'>
        <AnswerList answers={answers} style={style} product_id={product_id}/>
      </div>
    </div>
  )
}