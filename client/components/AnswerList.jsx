import React, { useState, createContext } from 'react';
import Answer from './Answer.jsx';
import ExpandAnswers from './AnswerExpand.jsx';

import Button from '@material-ui/core/Button';

export const AnswersContext = createContext();

export default function AnswerList({answers, style}) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  return (
    <div>
      {currentAnswers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer key={answer.id}answerData={answer}/>
      })}
      <AnswersContext.Provider value={[answerDisplayCount, setAnswerDisplayCount]} >
        <ExpandAnswers style={style} answers={answers} currentAnswers={currentAnswers} />
      </AnswersContext.Provider>
    </div>
  )
}

{/* <Button id='expandQuestions' variant='contained' className={style.button} onClick={() => setAnswerDisplayCount(answerDisplayCount + 2)}>See More Answers</Button> */}