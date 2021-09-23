import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import ExpandAnswers from './AnswerExpand.jsx';

export const AnswerCountContext = createContext();

export default function AnswerList({answers, style, product_id}) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  return (
    <div>
      {currentAnswers.map(answer => {
        //again only map the top two initially but save all answers inside of state
        return <Answer key={answer.id} answerData={answer}/>
      })}
      <AnswerCountContext.Provider value={[answerDisplayCount, setAnswerDisplayCount]} >
        <ExpandAnswers style={style} answers={answers} currentAnswers={currentAnswers} product_id={product_id}/>
      </AnswerCountContext.Provider>
    </div>
  )
}

AnswerList.propTypes = {
  answers: PropTypes.array,
  style: PropTypes.object,
  product_id: PropTypes.number,
}