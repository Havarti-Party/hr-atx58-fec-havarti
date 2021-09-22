import React, { useState, createContext } from 'react';
import Answer from './Answer.jsx';
import ExpandAnswers from './AnswerExpand.jsx';
import AnswerModal from './AnswerModal.jsx';

import Button from '@material-ui/core/Button';

export const AnswerCountContext = createContext();

export default function AnswerList({answers, style, questionId, product_id}) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  return (
    <div>
      {currentAnswers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer key={answer.id}answerData={answer}/>
      })}
      <AnswerCountContext.Provider value={[answerDisplayCount, setAnswerDisplayCount]} >
        <ExpandAnswers style={style} answers={answers} currentAnswers={currentAnswers} />
      </AnswerCountContext.Provider>
      <AnswerModal questionId={questionId} product_id={product_id}/>
    </div>
  )
}

{/* <Button id='expandQuestions' variant='contained' className={style.button} onClick={() => setAnswerDisplayCount(answerDisplayCount + 2)}>See More Answers</Button> */}