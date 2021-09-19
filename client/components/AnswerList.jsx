import React, {useState} from 'react';
import Answer from './Answer.jsx';
import Button from '@material-ui/core/Button';

export default function AnswerList({answers, style}) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  return (
    <div>
      {currentAnswers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer key={answer.id}answerData={answer}/>
      })}
      <Button id='expandQuestions' variant='contained' className={style.button} onClick={() => setAnswerDisplayCount(answerDisplayCount + 2)}>More Answers</Button>
    </div>
  )
}