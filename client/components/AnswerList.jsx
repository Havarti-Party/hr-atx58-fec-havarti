import React, {useState} from 'react';
import Answer from './Answer.jsx';

export default function AnswerList({answers}) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  return (
    <div>
      {currentAnswers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer key={answer.id}answerData={answer}/>
        })}
    </div>
  )
}