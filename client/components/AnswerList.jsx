import React, {useState} from 'react';
import Answer from './Answer.jsx';

export default function AnswerList({answers}) {
  return (
    <div>
      {answers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer answerData={answer}/>
        })}
    </div>
  )
}