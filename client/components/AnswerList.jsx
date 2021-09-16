import React, {useState} from 'react';
import Answer from './Answer.jsx';

export default function AnswerList({answers}) {
  return (
    <div>
      {answers.map(answer => {
        return <Answer answerData={answer}/>
        })}
    </div>
  )
}