import React, { useState }from 'react';
import AnswerList from './AnswerList.jsx'

//map the top two questions
//inside each quesiton. map top two answers
export default function Question({question}) {
  const [answers, setAnswers] = useState(Object.values(question.answers))

  return (
    <div id='question'>
      <div>
        <h3>Q: {question.question_body}?</h3>
      </div>
      <div id='answer list'>
        {console.log(answers)}
        <AnswerList answers={answers}/>
      </div>
    </div>
  )
}