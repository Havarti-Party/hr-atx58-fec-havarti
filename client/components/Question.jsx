import React, { useState }from 'react';
import AnswerList from './AnswerList.jsx'



export default function Question({question}) {
  const [answers, setAnswers] = useState(Object.values(question.answers))

  return (
    <div id='question'>
      <div>
        <h3>Q: {question.question_body}?</h3>
      </div>
      <div id='answerList'>
        <AnswerList answers={answers}/>
      </div>
    </div>
  )
}